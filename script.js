const tooltip = document.getElementById('tooltip');

document.querySelectorAll('[data-tip]').forEach(el=>{
  el.addEventListener('mouseenter', e=>{
    tooltip.innerText = el.dataset.tip;
    tooltip.style.display = 'block';
  });

  el.addEventListener('mousemove', e=>{
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  });

  el.addEventListener('mouseleave', ()=>{
    tooltip.style.display = 'none';
  });
});
