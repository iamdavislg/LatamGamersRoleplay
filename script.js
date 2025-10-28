AOS.init();

particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#bb00ff' },
    shape: { type: 'circle' },
    opacity: { value: 0.7 },
    size: { value: 3 },
    line_linked: { enable: true, color: '#bb00ff', opacity: 0.4 },
    move: { enable: true, speed: 2 }
  }
});

const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
closePopup.addEventListener('click', () => popup.style.display = 'none');

const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!musicPlaying) {
    bgMusic.play();
    musicPlaying = true;
    musicBtn.textContent = '🔇 Silenciar música';
  } else {
    bgMusic.pause();
    musicPlaying = false;
    musicBtn.textContent = '🎵 Activar música';
  }
});
