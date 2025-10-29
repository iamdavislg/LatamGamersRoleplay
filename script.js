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

// === Loader animado
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const loaderText = document.getElementById("loaderText");
  const text = "Cargando el universo de LatamGamers Roleplay...";
  const whoosh = new Audio("https://cdn.pixabay.com/download/audio/2021/09/26/audio_5de2f2b6b9.mp3?filename=whoosh-93028.mp3");
  let i = 0;

  function type() {
    if (i < text.length) {
      loaderText.textContent += text.charAt(i);
      i++;
      setTimeout(type, 28);
    } else {
      setTimeout(() => {
        whoosh.play().catch(() => {});
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => preloader.remove(), 3000);
      }, 3000);
    }
  }

  loaderText.textContent = "";
  type();
});
// Menú desplegable de Normativas ===
document.querySelector('.dropbtn').addEventListener('click', () => {
  const dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el menú al hacer clic fuera
window.addEventListener('click', (e) => {
  const dropdown = document.querySelector('.dropdown-content');
  const button = document.querySelector('.dropbtn');
  if (!button.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});
// Fin del menu desplegable de Normativas 
//Mostrar texto de normativas 
const normativaContenido = document.getElementById("normativa-contenido");
const tituloNormativa = document.getElementById("titulo-normativa");
const textoNormativa = document.getElementById("texto-normativa");

const textosNormativas = {
  "Robo a negocios": "Se solicita a los usuarios que reporten cualquier infracción a las normas al finalizar el robo, ya sea dentro del juego o mediante tickets de soporte. Además, es esencial llevar a cabo una fase previa de planificación, donde se identifiquen objetivos, se especifique el botín esperado y se planifique la ruta de escape. Aunque no se requieren tantas capturas de este proceso de planificación, es crucial tener evidencia del mismo. Los ladrones pueden estar acompañados por individuos que no pertenezcan a su grupo durante la comisión del robo. No se permite asaltar negocios donde se estén llevando a cabo eventos por parte de los civiles, como fiestas u otros eventos programados. Durante el asalto, los delincuentes deben portar armas de fuego, mientras que otros usuarios pueden utilizar armas de fuego de calibre inferior o armas blancas. Se debe iniciar el robo con un rol adecuado que incluya la interacción con los NPCs del establecimiento y la realización de amenazas. El número mínimo de usuarios en el robo es de 1, mientras que el máximo es de 5. Se requiere un mínimo de tres (3) oficiales para intervenir en el robo. Una vez iniciado el asalto, el delincuente no está obligado a esperar la llegada de las autoridades y puede optar por escapar si tiene la oportunidad. En caso de que se tome un rehén durante el robo, el monto máximo a negociar por su liberación es de $50.000. Sin embargo, la negociación no se limita únicamente a dinero, y se permite cierta libertad de rol para los usuarios. Los rehenes no pueden ser actores ni miembros de la propia familia de los delincuentes.",
  "Roles de corrupción": "Infringir las normativas relacionadas con el comportamiento corrupto conlleva una sanción de encarcelamiento fuera del personaje (Out Of Character) y, en casos graves, el bloqueo permanente de la cuenta del infractor. Para participar en un rol de corrupción, se requiere que el jugador respalde el comportamiento de su personaje con una biografía u historia coherente, así como un motivo válido para justificar su corrupción. La aprobación del rol por parte de un Administrador y del líder de la facción es esencial, y deben proporcionar una justificación coherente para el comportamiento corrupto del usuario. Además, se establece como requisito que el usuario tenga un nivel mínimo de cinco (5) en el servidor y no haya recibido sanciones administrativas previas. Solo se otorga autorización para llevar a cabo roles de corrupción a los miembros de la facción que ostenten un rango igual o superior a cinco (5) y hayan sido parte de la facción durante al menos un dos semanas. Estas medidas garantizan un entorno de juego equitativo y una narrativa coherente en el desarrollo de rol de corrupción.",
  "Hurtos, robos y /cartera": "Los hurtos solo pueden llevarse a cabo si tanto el ladrón como la víctima poseen nivel dos (2) mínimo. Si el robo es vía rol y no mediante /cartera, el monto sustraído no debe exceder de $15.000. Está permitido hurtar un vehículo con la intención de solicitar una recompensa o para usos ilícitos, no está permitido forzar al usuario a transferir la propiedad del vehículo o cualquier patrimonio.",
  "Robos a gran escala fuera de zonas negras": "Fuera de zonas negras, queda estrictamente prohibido llevar a cabo atentados a gran escala, como actos terroristas, la detonación de vehículos cargados de explosivos, el uso de dinamita (fuera del robo de casa) o la propagación de virus infecciosos por parte de los usuarios. Cualquier acción que resulte en un genocidio será sancionada, a menos que se cuente con una autorización previa de un administrador.",
  "Estafas": "Las estafas son actos que requieren un cierto nivel de habilidad y experiencia en el servidor. Para llevar a cabo una estafa de manera legítima, tanto la víctima como el estafador deben tener un nivel mínimo de (3) dentro del juego, lo que garantiza un conocimiento básico de las dinámicas y normativas del entorno. Además, se establece un límite máximo de $200.000 para el monto de la estafa, lo que asegura que las transacciones fraudulentas se mantengan dentro de límites razonables. Es importante destacar que queda estrictamente prohibido estafar activos de alto valor, como propiedades o vehículos. Esta medida busca proteger los activos más significativos de los jugadores y mantener un ambiente de juego justo y equilibrado para todos los participantes. Asimismo, se enfatiza que no se aceptará como excusa el argumento de que los documentos de pertenencia son falsos, ya que esto contradice directamente las normativas establecidas. En resumen, las estafas son acciones delicadas que requiere en un nivel mínimo de habilidad y experiencia en el servidor, y deben llevarse a cabo dentro de límites específicos para garantizar la integridad y la equidad del juego para todos los usuarios.",
  "Secuestros": "En cuanto al secuestro, definido como el acto de trasladar a un individuo sin su consentimiento con el fin de obtener un rescate u otro beneficio, solo pueden realizarlo aquellos que tengan facción oficial y cuenten con motivos justificados para ello.  Cualquier plan de secuestro debe ser comunicado previamente a un miembro del comité de rol, quien evaluará la preparación del mismo para decidir si se permite llevarlo a cabo. Es imprescindible recopilar documentación gráfica durante todo el desarrollo del rol. El Administrador o cualquier operador está en potestad de anular un rol.",
  "Requisitos mínimos para portar armas": "Usuarios que hayan acumulado un mínimo de horas. Nivel 1: Cuchillo — Bate — Nudillera Nivel 2: 9mm — 9mm silenciada — Desert Eagle Nivel 3: TEC9 — UZI — Escopeta — MP5 Nivel 6: AK-47 — M4 A partir de nivel seis (6) podrás utilizar todas las armas del juego. En consecuencia, cualquier usuario que sea detectado portando un arma sin haber alcanzado este requisito será bloqueado de inmediato por sospecha de cheats. Además, es importante destacar que una vez que los usuarios alcancen el requisito mínimo de horas de juego para portar armas, deberán adherirse estrictamente a las normativas de uso responsable de armamento establecidas por el servidor. Esto implica respetar las zonas designadas para el uso de armas, abstenerse de utilizarlas en situaciones no justificadas por el rol, y mantener un comportamiento acorde al contexto de juego de rol",
  "Extracción de armas": "No es necesario interpretar el acto de sacar un arma, debido a que el servidor realiza un rol automático y visible ante cualquier jugador cercano. Sin embargo, es crucial recordar que la extracción de armas debe realizarse de manera realista y coherente con el contexto del rol. Los jugadores deben abstenerse de sacar armas de manera irracional o sin justificación. ",
   "Armas de alto calibre": "Las armas deben ser manejadas de manera responsable y discreta. Cuando sea necesario llevar armas de forma personal, se recomienda que estas sean visibles, preferiblemente colgadas en la espalda. Sin embargo, es importante recordar que exhibir armas de gran calibre en zonas seguras o intentar involucrarlas a un rol (dentro de zona segura) no está permitido. Está permitido exhibir estas armas en zonas negras o propias de tu organización (territorios). Cualquier jugador que sea visto portando un arma de gran calibre de esta manera será castigado.",
  "Venta de armamento": "Se establece la prohibición de la venta de armas por parte de los cuerpos de autoridad a cualquier grupo ilegal o civil. Las armas suministradas para el uso cotidiano de los agentes de la ley, quienes están obligados a devolverlas al finalizar su turno para evitar complicaciones. La venta de armas resultará en sanciones tanto en el contexto del juego como fuera de él, dependiendo de la gravedad de la infracción. Queda explícitamente prohibido vender armas a grupos ilegales o civiles. Los usuarios comunes no están autorizados para hurtar o robar armas a oficiales de policía. Cualquier intento de hacerlo será sancionado con el bloqueo permanente de la cuenta del infractor.",
  "Degollamiento con arma blanca": "En el escenario en el que se tenga en posesión un arma blanca y se tenga la intención de realizar un acto de degollamiento a otro usuario, se requiere realizar una representación detallada utilizando los comandos de rol correspondientes antes de proceder con la acción. La omisión de este proceso se considerará como forzamiento de rol.",
  "Zonas negras y seguras": "Se define como zonas seguras a todas áreas que tienen prohibido realizar actos ilícitos, las zonas seguras están marcadas en el juego de color verde. Existen lugares que cuentan con alta seguridad, posiblemente fuerte atención policial, muchos ciudadanos, entre otras, estas zonas, definidas mas que nada por el entorno, podrían ser: Aeropuertos, estaciones de tren o campos de aviación., Edificios gubernamentales, como un ayuntamiento o un hospital. (Las clínicas privadas están totalmente excluidas), Bancos o entidades de comisión de dinero., Concesionarios donde se pueden comprar vehículos nuevos., Tiendas de comercio legal de armamento., Estaciones de organizaciones gubernamentales (comisaría, ayuntamiento, carceles, hospitales), Intersecciones importantes o autovías., Existen áreas que limitan los atracos y secuestros, tienen que estar avisados y supervisados por un administrador. Sanción: Desde una advertencia verbal hasta un jail administrativo.",
  "Avisos del entorno": "El rol de entorno siempre debe ser neutral y acorde a las circunstancias. Por ejemplo, un robo en un callejón oscuro en la madrugada no ameritaría una llamada al 911. Además, tampoco está permitido rolear que por entorno los NPC atacarán o defenderán a alguien durante una situación. Se exige al usuario que guarde fotos de roles previos en caso de ser necesario. Fotos de rol se tomarán como válidas si presentan /timestamp y la /hora del servidor.",
  "Rol Ofensivo": "El rol ofensivo está permitido únicamente en zonas negras designadas dentro del servidor. Se prohíbe estrictamente llevar a cabo roles ofensivos en zonas seguras o áreas civiles, ya que esto puede afectar negativamente la experiencia de juego de otros usuarios. Durante el desarrollo de un rol ofensivo, es obligatorio que los participantes utilicen armas de fuego de calibre alto, como AK-47, M4, entre otras. El uso de armas de bajo calibre o armas blancas no está permitido en estas situaciones, ya que no cumplen con los requisitos necesarios para un rol ofensivo adecuado. Además, se establece que el número mínimo de participantes en un rol ofensivo debe ser de tres (3) usuarios. Esta medida busca garantizar una experiencia de juego equilibrada y realista, evitando situaciones en las que un solo usuario pueda dominar o desequilibrar el desarrollo del rol ofensivo.",
  "Reglas de Personaje": "Deben crear un personaje con una historia coherente y un nombre apropiado para roleplay. La ficha debe contener datos básicos y una breve biografía que explique motivaciones. Recomendaciones: Evitar nombres absurdos o invasivos. Mantener coherencia entre la historia y las acciones dentro del juego.  Actualizar la ficha si hay cambios significativos en el personaje.",
  "Modificaciones externas": "Cualquier modificación en el juego quedará totalmente prohibida si demuestra un beneficio para el usuario. La modificación de un cliente para obtener un benefició también se considera una infracción de la normativa. Las únicas modificaciones permitidas son las que garanticen una modificación estética o visual y nunca pueden modificar la funcionalidad."
};

// Muestra el bloque de normativa al hacer clic
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const texto = textosNormativas[link.textContent] || "Normativa en desarrollo. Pronto será publicada.";
    tituloNormativa.textContent = link.textContent;
    textoNormativa.textContent = texto;

    normativaContenido.style.display = "block"; // se muestra aquí
    normativaContenido.scrollIntoView({ behavior: "smooth" });
  });
});

