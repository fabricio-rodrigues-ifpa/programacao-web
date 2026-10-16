(() => {
 'use strict';
 const form=document.querySelector('#diagnostic-form');
 if(!form)return;
 const perguntas=window.WEBLAB_CURSO.perguntas;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 document.querySelector('#diagnostic-questions').innerHTML=perguntas.map(q=>`<fieldset class="diagnostic-question"><legend>${esc(q.id)} / ${esc(q.area)} / ${esc(q.titulo)}</legend><pre><code>${esc(q.codigo)}</code></pre><label for="resposta-${esc(q.id)}">${esc(q.enunciado)}</label><textarea id="resposta-${esc(q.id)}" name="${esc(q.id)}" rows="4"></textarea></fieldset>`).join('');
 const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-|-$/g,'').toLowerCase().slice(0,60)||'aluno';
 form.addEventListener('submit',event=>{
  event.preventDefault();
  const dados=new FormData(form),nome=String(dados.get('nome')||'').trim(),turma=String(dados.get('turma')||'').trim();
  if(!nome||!turma){document.querySelector('#diagnostic-status').textContent='Preencha seu nome e sua turma antes de baixar.';return;}
  const texto=['WEBLAB - DIAGNÓSTICO INDIVIDUAL','16/10/2026 - Prof. Fabrício Rodrigues','Nome: '+nome,'Turma: '+turma,'',...perguntas.flatMap(q=>[q.id+' - '+q.enunciado,String(dados.get(q.id)||'(sem resposta)'),'']),'REGISTRO DA PRÁTICA',String(dados.get('pratica')||'(sem registro)'),'','Facilidade: '+(dados.get('facilidade')||''),'Dúvida: '+(dados.get('duvida')||'')].join('\n');
  const url=URL.createObjectURL(new Blob(['\uFEFF'+texto],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');
  a.href=url;a.download='diagnostico-'+slug(turma)+'-'+slug(nome)+'.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  document.querySelector('#diagnostic-status').textContent='Download preparado: '+a.download+'. Confira o arquivo na pasta Downloads e entregue-o ao professor durante a aula. Baixar não envia o arquivo automaticamente.';
 });
})();
