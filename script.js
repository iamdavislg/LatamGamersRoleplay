document.addEventListener('DOMContentLoaded', function(){
  // inicio con opacidad cero
  document.body.style.opacity = 0;
  document.body.style.overflow = "hidden";

  const cta = document.querySelector('.nav-cta');
  if (cta) {
    cta.addEventListener('mouseover', () => { 
      cta.style.boxShadow = '0 22px 80px rgba(230,180,0,0.22)'; 
    });
    cta.addEventListener('mouseout', () => { 
      cta.style.boxShadow = ''; 
    });
  }
});

// --------------------------
// ANIMACIONES PRINCIPALES
// --------------------------
(function(){
  function onLoad(){
    // agregar clase reveal a secciones comunes
    const selectors = ['header.site-header','main','section','.card','.feature','.hero','.brand-text','.content'];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if(!el.classList.contains('reveal')) el.classList.add('reveal');
      });
    });

    // observador para animaciones de scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ---------- LOADER ----------
    const loader = document.getElementById('loader');
    setTimeout(() => {
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
          // ✅ mostrar el contenido de la página
          document.body.style.overflow
