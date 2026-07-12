document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
  },{threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  document.querySelectorAll('.stat .num[data-target]').forEach(el=>{
    const target = parseInt(el.dataset.target,10);
    const statIo = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          let cur=0; const step=Math.max(1,Math.round(target/40));
          const t=setInterval(()=>{ cur+=step; if(cur>=target){cur=target;clearInterval(t);} el.textContent=cur+'+'; },30);
          statIo.unobserve(el);
        }
      });
    },{threshold:0.4});
    statIo.observe(el);
  });
});
