document.addEventListener('DOMContentLoaded', () => {
  const ip = '144.217.19.104';
  const port = '7777';
  const statusEl = document.getElementById('serverStatus');

  // Copiar IP
  document.getElementById('copyIP').addEventListener('click', () => {
    navigator.clipboard.writeText(`${ip}:${port}`).then(() => {
      alert(`IP copiada: ${ip}:${port}`);
    });
  });

  // Estado simulado
  function fakeStatus() {
    const online = Math.random() > 0.2;
    statusEl.textContent = online ? 'En línea' : 'Desconectado';
    statusEl.style.color = online ? '#00e6ff' : '#ff4d4d';
  }

  fakeStatus();
  setInterval(fakeStatus, 8000);
});
