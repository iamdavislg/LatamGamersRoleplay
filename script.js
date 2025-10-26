document.getElementById('year').textContent = new Date().getFullYear();

// Simulación del estado del servidor
setTimeout(() => {
  const status = document.getElementById('server-status');
  status.textContent = 'Servidor Online';
  status.classList.remove('status-off');
  status.classList.add('status-on');
}, 2500);

