
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



// Animations: add 'in-view' to elements with class 'reveal' when they enter viewport
(function(){
  function onLoad(){
    // add 'reveal' class to common blocks if not present
    var selectors = ['header.site-header','main','section','.card','.feature','.hero','.brand-text','.content'];
    selectors.forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        if(!el.classList.contains('reveal')) el.classList.add('reveal');
      });
    });

    var observerOptions = {root:null, rootMargin: '0px', threshold: 0.12};
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(function(el){
      observer.observe(el);
    });

    // loader: ensure it's removed from interaction after 2s (matches CSS animation length)
    var loader = document.getElementById('loader');
    setTimeout(function(){
      if(loader){
        loader.style.display = 'none';
      }
    }, 2100);

    // page transition on link clicks
    document.querySelectorAll('a[href]').forEach(function(a){
      // ignore anchors on same page
      var href = a.getAttribute('href');
      if(!href || href.startsWith('#') || href.indexOf('javascript:') === 0) return;
      a.addEventListener('click', function(ev){
        ev.preventDefault();
        document.body.classList.add('page-fade','fade-out');
        setTimeout(function(){ window.location = href; }, 420);
      });
    });

    // on beforeunload, show fade (for direct reloads)
    window.addEventListener('beforeunload', function(){
      document.body.classList.add('fade-out');
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', onLoad);
  }else onLoad();
})();
