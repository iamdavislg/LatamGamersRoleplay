<a class="pill" href="https://drive.google.com/file/d/1kL-9LzvP4S60ll_-T3D6_CqImm71T3LF/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
  JUGAR AHORA
</a>
const countEl = document.getElementById('count');
let current = 1223;
function randomDelta(){return Math.floor(Math.random()*5) - 2;}
setInterval(()=>{
  current = Math.max(200, current + randomDelta());
  countEl.textContent = current;
}, 3000);
