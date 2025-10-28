// Initialize AOS
AOS.init({duration:700,easing:'ease-out-cubic',once:true});

// Particles
particlesJS('particles-js', {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 800 } },
    color: { value: ['#b400ff','#ff00ff','#d185ff'] },
    shape: { type: 'circle' },
    opacity: { value: 0.75, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 1.2, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 120 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

// Preloader typing effect + fadeout
const preloader = document.getElementById('preloader');
const typingText = document.getElementById('typingText');
const fullText = 'Cargando el universo de LatamGamers Roleplay...';
let i = 0;
function typeWriter(){ if(i < fullText.length){ typingText.textContent += fullText.charAt(i); i++; setTimeout(typeWriter,18); } }
typingText.textContent = '';
typeWriter();

window.addEventListener('load', () => {
  setTimeout(()=>{
    // play whoosh only if music was activated
    const bgMusic = document.getElementById('bgMusic');
    const whoosh = document.getElementById('whoosh');
    if(!bgMusic.paused){ try{ whoosh.play(); } catch(e){} }
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(()=> preloader.remove(),600);
    // show welcome popup after load
    document.getElementById('welcomePopup').classList.remove('hidden');
  }, 1200);
});

// Welcome popup
const closeWelcome = document.getElementById('closeWelcome');
closeWelcome.addEventListener('click', ()=> document.getElementById('welcomePopup').classList.add('hidden'));

// Music control
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;
musicBtn.addEventListener('click', ()=>{
  if(!musicPlaying){ bgMusic.play().catch(()=>{}); musicPlaying=true; musicBtn.textContent='🔇 Silenciar música'; }
  else{ bgMusic.pause(); musicPlaying=false; musicBtn.textContent='🎵 Activar música'; }
});

// Login modal open/close
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
loginBtn.addEventListener('click', (e)=>{ e.preventDefault(); loginModal.classList.remove('hidden'); loginModal.setAttribute('aria-hidden','false'); });
closeLogin.addEventListener('click', ()=>{ loginModal.classList.add('hidden'); loginModal.setAttribute('aria-hidden','true'); });
// reserve space for future login integration when pressing Ingresar
document.getElementById('loginSubmit').addEventListener('click', ()=>{ alert('Aquí se integrará el sistema de login/launcher en el futuro.'); loginModal.classList.add('hidden'); });

// Header hide on scroll (disappear down, appear up)
let lastScroll = 0;
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', ()=>{
  const current = window.pageYOffset;
  if(current <= 0){ header.classList.remove('hidden'); return; }
  if(current > lastScroll && current > 100){ // down
    header.classList.add('hidden');
  } else { // up
    header.classList.remove('hidden');
  }
  lastScroll = current;
});

// Smooth scroll to sections when clicking nav links
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click', (e)=>{
    const txt = link.textContent.trim().toLowerCase();
    if(txt === 'normativas'){ e.preventDefault(); const el = document.getElementById('normativasSection'); if(el) el.scrollIntoView({behavior:'smooth'}); }
    if(txt === "top's" || txt === 'tops' || txt === "top's ") { e.preventDefault(); const el = document.getElementById('topsSection'); if(el) el.scrollIntoView({behavior:'smooth'}); }
    if(txt === 'pcu'){ e.preventDefault(); const el=document.getElementById('pcuSection'); if(el) el.scrollIntoView({behavior:'smooth'}); }
    if(txt === 'inicio'){ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }
  });
});