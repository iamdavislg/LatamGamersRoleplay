// Simple script: button opens Mediafire link, and counter animates
document.getElementById('playBtn').addEventListener('click', function(e){
  e.preventDefault();
  const link = 'https://www.mediafire.com/file/okl0y0pddx60k3k/LatamGamers.exe/file';
  window.open(link, '_blank');
});

// Online counter (simulated animation)
const countEl = document.getElementById('count');
let current = 1223;
function randomDelta(){
  return Math.floor(Math.random()*5) - 2; // -2..+2
}
setInterval(()=> {
  current = Math.max(200, current + randomDelta());
  countEl.textContent = current;
}, 3000);

// Small entrance animation
window.addEventListener('load', ()=>{
  setTimeout(()=> document.body.classList.add('loaded'), 120);
});