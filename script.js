
document.addEventListener('DOMContentLoaded', function(){
  // simple fade-in for main areas
  document.body.style.opacity = 0;
  setTimeout(()=>{document.body.style.transition = 'opacity 700ms ease'; document.body.style.opacity = 1;}, 80);
  const cta = document.querySelector('.nav-cta');
  if(cta){
    cta.addEventListener('mouseover', ()=>{ cta.style.boxShadow = '0 22px 80px rgba(230,180,0,0.22)'; });
    cta.addEventListener('mouseout', ()=>{ cta.style.boxShadow = ''; });
  }
});
