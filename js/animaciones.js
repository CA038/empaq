export function initAnimations() {
  // Los elementos aparecen suavemente cuando entran en pantalla.
  const items=document.querySelectorAll('.reveal');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){items.forEach(el=>el.classList.add('visible'));return;}
  const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:0.08,rootMargin:'0px 0px -25px 0px'});
  items.forEach(el=>observer.observe(el));
}
