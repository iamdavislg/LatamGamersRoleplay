// === CONFIGURACIÓN - cambia aquí según necesites ===
const SERVER_IP = "144.217.19.104";
const SERVER_PORT = "7777";
const DOWNLOAD_LINK = "https://web716.github.io/LatamGamersRoleplay/downloads/Launcher%20Latam.exe"; // donde pondrás el instalador
// ====================================================

// Conectar botones
document.addEventListener("DOMContentLoaded", () => {
  // botón descargar
  const dl = document.getElementById("download-link");
  if(dl) dl.setAttribute("href", DOWNLOAD_LINK);

  // boton conectar: abre el ejecutable SAMP si el usuario lo tiene instalado
  const btnConnect = document.getElementById("btn-connect");
  if(btnConnect){
    btnConnect.addEventListener("click", () => {
      // intentamos lanzar el protocolo samp:// (algunos lanzadores soportan)
      // de forma práctica abrimos una URL que instruya al usuario si no funciona
      const sampUrl = `samp:${SERVER_IP}:${SERVER_PORT}`;
      // intentar abrir directo; si no, copiar la IP al portapapeles
      window.location.href = `samp://${SERVER_IP}:${SERVER_PORT}`;
      // fallback: avisar
      setTimeout(()=> {
        alert(`Si no se abrió SA:MP, conecta manualmente a ${SERVER_IP}:${SERVER_PORT} o descarga el launcher.`);
      }, 800);
    });
  }

  // Poll del servidor (demo): actualiza el estado cada 30s
  getServerStatus();
  setInterval(getServerStatus, 30000);

  // inicia particles
  startParticles();
});

// ====================================================
// FUNCIÓN: Obtener estado del servidor (demo)
// Aquí hay 2 opciones:
// A) Si tienes una API que devuelve JSON {online: true, players: 12, max: 254}, úsala.
// B) Si no, este demo simula valores.
// ====================================================
async function getServerStatus(){
  // elementos
  const statusDot = document.getElementById("status-dot");
  const statusText = document.getElementById("status-text");
  const playersCount = document.getElementById("players-count");
  const playersMax = document.getElementById("players-max");
  const progressBar = document.getElementById("progress-bar");

  // --------- Opción A: usar tu propia API (reemplaza la URL)
  // const apiUrl = `https://mi-dominio.com/api/samp?ip=${SERVER_IP}&port=${SERVER_PORT}`;
  // try {
  //   const resp = await fetch(apiUrl);
  //   const data = await resp.json();
  //   updateStatus(data.online, data.players, data.max);
  //   return;
  // } catch(e) { console.warn("API no disponible, usando demo"); }

  // --------- Opción B: Demo aleatorio (borra si usas API real)
  const demoPlayers = Math.floor(Math.random()*60); // demo
  const demoMax = 254;
  updateStatus(true, demoPlayers, demoMax);

  // función que actualiza la UI
  function updateStatus(online, players, max){
    if(online){
      statusDot.style.background = "#28c76f";
      statusText.textContent = "EN LÍNEA";
    } else {
      statusDot.style.background = "#bdbdbd";
      statusText.textContent = "OFFLINE";
    }
    playersCount.textContent = players;
    playersMax.textContent = max;
    const percent = Math.min(100, Math.round((players/max)*100));
    progressBar.style.width = percent + "%";
  }
}

// ====================================================
// Partículas simples (canvas) — efecto parecido a VidaRol
// ====================================================
function startParticles(){
  const canvas = document.getElementById("particles");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];

  function resize(){ w = canvas.width = canvas.clientWidth; h = canvas.height = canvas.clientHeight; }
  window.addEventListener("resize", resize);
  resize();

  function createParticles(){
    particles = [];
    const count = Math.floor((w*h)/70000);
    for(let i=0;i<count;i++){
      particles.push({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.3,
        vy: (Math.random()-0.5)*0.3,
        r: Math.random()*1.6+0.4
      });
    }
  }
  createParticles();

  function loop(){
    ctx.clearRect(0,0,w,h);
    // draw particles
    ctx.fillStyle = "rgba(75,200,220,0.9)";
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if(p.x<0) p.x = w; if(p.x>w) p.x = 0;
      if(p.y<0) p.y = h; if(p.y>h) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    });
    // draw lines
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a = particles[i], b = particles[j];
        const dx = a.x-b.x, dy=a.y-b.y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if(d < 130){
          ctx.strokeStyle = "rgba(75,200,220,"+(0.15 - d/900)+")";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
}
