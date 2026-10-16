(() => {
 const lista=document.querySelector('#help-references');
 for(const r of window.WEBLAB_CURSO.referencias.filter(r=>r.id!=='abner')){
  const li=document.createElement('li'),a=document.createElement('a');
  a.href=r.url;a.textContent=r.titulo+' ↗';a.target='_blank';a.rel='noopener noreferrer';li.append(a);lista.append(li);
 }
})();
