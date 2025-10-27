// --- Dropdown mobile toggle (al tocar en móvil, abre/cierra el dropdown) ---
document.addEventListener('DOMContentLoaded', () => {
  const drop = document.querySelector('.dropdown');
  const btn = document.getElementById('drop-norm');

  // toggle para pantallas táctiles
  btn && btn.addEventListener('click', (e) => {
    e.preventDefault();
    drop.classList.toggle('open');
  });

  // cerrar si el usuario hace click fuera
  document.addEventListener('click', (e) => {
    if(!drop.contains(e.target)) drop.classList.remove('open');
  });

  // scroll suave para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if(targetId.length > 1){
        e.preventDefault();
        const target = document.querySelector(targetId);
        if(target){
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // cerrar dropdown en mobile después de click
          if(drop) drop.classList.remove('open');
        }
      }
    });
  });
});
