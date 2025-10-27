document.getElementById('playBtn').addEventListener('click', function(e){
  e.preventDefault();
  const link = 'https://www.mediafire.com/file/okl0y0pddx60k3k/LatamGamers.exe/file';
  window.open(link, '_blank');
});

const countEl = document.getElementById('count');
let current = 1223;
function randomDelta(){return Math.floor(Math.random()*5) - 2;}
setInterval(()=>{
  current = Math.max(200, current + randomDelta());
  countEl.textContent = current;
}, 3000);
