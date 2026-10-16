/**
 * CONHECIMENTO/VIVO — V14 Cinematic Lab
 * Aperfeiçoamentos progressivos: nenhum componente estrutural é recriado.
 * O carrossel sticky, estados dos grafos, menu e âncoras seguem com seu JS original.
 * Desligamento: remover este script e cinematic-v14.css.
 */
(function(){
 'use strict';
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const finePointer=window.matchMedia('(pointer: fine)');
 const root=document.documentElement;
 if(!root.classList.contains('cinematic-v14'))return;
 const onReady=()=>{
  const hero=document.querySelector('.hero');
  // Iluminação acompanha o ponteiro sem deslocar textos ou grafos.
  if(hero&&finePointer.matches&&!reduced.matches){
   let raf=0,point=null;
   hero.addEventListener('pointermove',(event)=>{
    if(event.pointerType!=='mouse')return;
    const rect=hero.getBoundingClientRect();
    point={x:Math.max(15,Math.min(95,(event.clientX-rect.left)/rect.width*100)),y:Math.max(10,Math.min(85,(event.clientY-rect.top)/rect.height*100))};
    if(raf)return;
    raf=requestAnimationFrame(()=>{
     raf=0;
     if(!point)return;
     hero.style.setProperty('--v14-pointer-x',point.x.toFixed(1)+'%');
     hero.style.setProperty('--v14-pointer-y',point.y.toFixed(1)+'%');
    });
   },{passive:true});
   hero.addEventListener('pointerleave',()=>{
    point=null;hero.style.setProperty('--v14-pointer-x','65%');hero.style.setProperty('--v14-pointer-y','43%');
   });
  }
  // Revelação de capítulos. Sem IntersectionObserver o conteúdo continua visível.
  if('IntersectionObserver' in window && !reduced.matches){
   const targets=[...document.querySelectorAll([
    '.decision-copy h2',
    '.transformation-copy h2',
    '.journey-head h2',
    '.teams-intro h2',
    '.governance-intro h2',
    '.maturity-copy h2'
   ].join(','))];
   const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
     if(entry.isIntersecting){
      entry.target.classList.add('v14-in');
      observer.unobserve(entry.target);
     }
    });
   },{threshold:.14,rootMargin:'0px 0px -6% 0px'});
   targets.forEach(el=>{
    if(el.getBoundingClientRect().top < innerHeight*.9){return}
    el.classList.add('v14-observe');observer.observe(el);
   });
  }
  // Perspectiva local: aplica-se somente à vitrine; nunca ao track do carrossel.
  if(finePointer.matches&&!reduced.matches && window.innerWidth>800){
   document.querySelectorAll('.journey-visual').forEach(stage=>{
    const mock=stage.querySelector('.mock-window');if(!mock)return;
    let scheduled=false,angles={x:0,y:0};
    function move(event){
     if(event.pointerType!=='mouse')return;
     const box=stage.getBoundingClientRect();
     if(!box.width||!box.height)return;
     const nx=Math.max(0,Math.min(1,(event.clientX-box.left)/box.width));
     const ny=Math.max(0,Math.min(1,(event.clientY-box.top)/box.height));
     angles={x:(.5-ny)*3.3,y:(nx-.5)*3.8};
     if(scheduled)return;
     scheduled=true;
     requestAnimationFrame(()=>{
      scheduled=false;
      mock.style.setProperty('--v14-tilt-x',angles.x.toFixed(2)+'deg');
      mock.style.setProperty('--v14-tilt-y',angles.y.toFixed(2)+'deg');
     });
    }
    stage.addEventListener('pointermove',move,{passive:true});
    stage.addEventListener('pointerleave',()=>{
     angles={x:0,y:0};
     mock.style.setProperty('--v14-tilt-x','0deg');
     mock.style.setProperty('--v14-tilt-y','0deg');
    });
   });
  }
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',onReady,{once:true});
 else onReady();
})();