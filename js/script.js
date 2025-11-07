// Simple menu toggle + scroll animations (IntersectionObserver)
document.addEventListener('DOMContentLoaded', function(){
  // menu toggles
  Array.from(document.querySelectorAll('.nav-toggle')).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      // find corresponding navLinks by id similarity
      const parent = btn.closest('.nav-inner') || document;
      const links = parent.querySelector('.nav-links');
      if(links) links.classList.toggle('show');
    });
  });

  // reveal on scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('in-view');
    });
  }, {threshold:0.12});

  document.querySelectorAll('.section, .card, .testimonial, .hero').forEach(el=>obs.observe(el));
});
