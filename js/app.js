document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  setTimeout(()=> {
    const s = document.getElementById('server-status');
    if(s) {
      s.classList.remove('status-off');
      s.classList.add('status-on');
      s.textContent = 'Servidor Online';
    }
  }, 1500);
});

window.addEventListener('load', async () => {
  if(!window.tsParticles) return;

  await tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: { color: { value: "" } },
    fullScreen: { enable: false },
    detectRetina: true,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 120, duration: 0.6 },
        push: { quantity: 3 }
      }
    },
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: ["#7c3aed", "#a78bfa", "#d6b8ff"] },
      shape: { type: "circle" },
      opacity: { value: 0.78, random: { enable: true, minimumValue: 0.35 } },
      size: { value: { min: 1.5, max: 6 } },
      move: {
        enable: true,
        speed: 0.9,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" }
      },
      links: {
        enable: true,
        distance: 140,
        color: "#8a5bff",
        opacity: 0.09,
        width: 1
      }
    }
  });
});


