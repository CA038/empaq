export function initMenu() {
  // Este menú se abre y cierra sin interferir con la navegación de escritorio.
  const button=document.querySelector('.menu-toggle');
  const menu=document.querySelector('#mobile-menu');
  if(!button||!menu)return;
  const close=()=>{menu.hidden=true;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Abrir menú');};
  button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';menu.hidden=!open;button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  window.matchMedia('(min-width: 961px)').addEventListener('change',close);
}
