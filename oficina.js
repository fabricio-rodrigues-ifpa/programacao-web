(() => {
  'use strict';
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const list = (arr) => `<ul>${arr.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`;
  function resources(a) {
    return `<div class="detail-actions">
      <a class="button primary" href="${esc(a.projetoZIP)}" download>Baixar base · 3 arquivos ↓</a>
      <a class="button secondary" href="slides.html?id=aula-04">Apresentar slides ↗</a>
      <a class="button secondary" href="${esc(a.slidePDF)}">Slides em PDF ↗</a>
      <a class="button secondary" href="${esc(a.aulaPDF)}">Guia de digitação em PDF ↗</a>
      <a class="button secondary" href="registro.html?id=aula-04">Registrar testes e entregar ↗</a>
    </div>`;
  }
  function render(a) {
    const d=a.oficinaConteudo;
    document.title='06/11 · Oficina de formulários · WebLab';
    document.querySelector('#course-lesson').innerHTML=`
      <header class="detail-hero"><p class="eyebrow">AULA 04 · 06/11/2026 · OFICINA DE FORMULÁRIOS</p>
        <h1>${esc(d.titulo)}</h1><p class="lead">${esc(d.subtitulo)}</p>
        <p>VS Code e Live Server · um computador por aluno</p>
        <a class="button secondary" href="index.html#encontros">← Voltar às aulas</a>${resources(a)}</header>
      <div class="detail-layout"><article class="lesson-content oficina-content">
        <section id="objetivos"><h2>Hoje você escreve o HTML</h2><p>O CSS e o JavaScript de apoio já estão configurados. A base começa sem campos e sem botões. Digite uma etapa, salve com Ctrl+S e teste antes de seguir.</p>
          ${list(d.objetivos)}<p class="soft-box">Esta oficina usa uma pasta separada. Guarde o chamado de suporte das aulas anteriores; em 13/11 retomaremos esse projeto com a base da aula de validação.</p></section>
        <section id="preparo"><h2>Baixar e abrir</h2><ol><li>Baixe e extraia o ZIP. Ele contém apenas <code>index.html</code>, <code>style.css</code> e <code>script.js</code>.</li><li>No VS Code: Arquivo → Abrir Pasta. Escolha a pasta extraída.</li><li>Abra <code>index.html</code> e escolha Open with Live Server.</li><li>Mantenha os slides e o HTML ao lado. Substitua apenas o comentário da etapa pelo código.</li></ol>
          <p>O <code>form</code> e a área de resultado já vêm prontos. Etapas 01–17 ficam em <code>#campos</code>; 18–20 em <code>#acoes</code>. Preserve os ids usados pelo apoio.</p></section>
        <section id="fundamentos"><h2>Antes das tags</h2><p>Um formulário agrupa controles para coletar dados. Um cadastro, uma busca e uma inscrição podem usar os mesmos controles com finalidades diferentes. <code>type</code> muda o comportamento de <code>input</code>; <code>select</code> e <code>textarea</code> são tags próprias.</p><p><code>label</code> identifica o controle, <code>id</code> faz sua associação, <code>name</code> nomeia o dado e <code>value</code> representa seu valor. Use dados inventados.</p><p>O projeto mostra os dados localmente, abaixo do formulário. Não faz upload, não grava em banco de dados e não envia a um servidor. A aparência de alguns controles varia conforme o navegador.</p></section>
        <section id="construcao"><h2>20 etapas para digitar e testar</h2>
          ${d.passos.map(p=>`<article class="construction-step" id="etapa-${p.n}"><h3>${String(p.n).padStart(2,'0')} · ${esc(p.titulo)}</h3>
            <p class="step-place"><strong>Onde:</strong> ${esc(p.onde)}</p>
            <pre><code>${esc(p.codigo)}</code></pre>${list(p.explicacao)}
            <figure><img src="${p.figura}" alt="Exemplo do controle: ${esc(p.titulo)}" loading="lazy"><figcaption>Prévia desta etapa. O formulário completo reunirá os controles.</figcaption></figure>
            <p class="step-test"><strong>Salve e teste:</strong> ${esc(p.teste)}</p></article>`).join('')}</section>
        <section id="apoio"><h2>O apoio já preparado</h2><p>O evento <code>submit</code> só ocorre após passar pelas regras nativas. O JavaScript cancela a navegação padrão, lê os controles com <code>FormData</code> e cria a tabela com <code>textContent</code>. Não digite outro listener de envio.</p><p>O apoio preserva os valores repetidos de checkboxes e listas múltiplas. Inclui o botão acionado, mascara senhas e mostra apenas nome e tamanho dos arquivos selecionados.</p><p>Editar um dado esconde o resumo antigo; enviar novamente substitui as linhas. <strong>Limpar</strong> restaura os valores iniciais, incluindo range = 5 e a cor inicial.</p></section>
        <section id="testes"><h2>Conferência dos testes</h2><div class="lesson-table-wrap"><table class="lesson-table"><thead><tr><th>Teste</th><th>Resultado esperado</th></tr></thead><tbody>${d.testes.slice(1).map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join('')}</tbody></table></div>
          <p>Experimente remover o <code>name</code> de busca e adicionar <code>disabled</code> em outro teste. Compare o resumo, depois desfaça as alterações. Campos sem name, desabilitados e opções desmarcadas não participam da coleta.</p>
          <details><summary>Conferir a referência depois de tentar</summary><p>Abra a referência para comparar uma diferença por vez com sua versão.</p><a class="button secondary" href="pratica/aula-04-modelo.html">Abrir referência preenchível ↗</a></details></section>
        <section id="entrega"><h2>Entrega</h2>${list(d.entrega)}<h3>Bilhete de saída</h3>${list(d.bilhete)}<a class="button primary" href="registro.html?id=aula-04">Registrar testes e baixar TXT ↗</a></section>
        <section id="referencias"><h2>Referências para tirar dúvidas</h2><ul>${d.referencias.map(r=>`<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.titulo)} ↗</a></li>`).join('')}</ul><p>Consulta em 05/11/2026. Links externos precisam de internet.</p></section>
        <nav class="return-nav"><a class="button secondary" href="index.html#encontros">← Voltar às aulas</a><a class="button secondary" href="aulas.html?id=aula-05">13/11 · Validação →</a></nav>
      </article><aside class="detail-aside"><p class="eyebrow">AULA 04 · 06/11</p>${resources(a)}<nav class="lesson-nav"><a href="#preparo">Baixar e abrir</a><a href="#fundamentos">Fundamentos</a><a href="#construcao">Digitar os controles</a><a href="#testes">Testes</a><a href="#entrega">Entrega</a><a href="#referencias">Referências</a></nav></aside></div>`;
  }
  function renderSlides(a) {
    const d=a.oficinaConteudo;
    const box=document.querySelector('#lesson-slide');
    const page=document.querySelector('.slide-page');
    let index=Math.max(0,Math.min(d.slides.length-1,Number(location.hash.slice(1))-1||0));
    let presenting=false;
    document.title='Slides · 06/11 · Oficina de formulários';
    page.classList.add('oficina-deck');
    document.querySelector('#slide-back').href='aulas.html?id=aula-04';
    document.querySelector('#slide-pdf').href=a.slidePDF;
    const present=document.createElement('button');present.className='button secondary';present.type='button';present.textContent='Apresentar';present.setAttribute('aria-pressed','false');
    document.querySelector('.slide-controls').insertBefore(present,document.querySelector('#slide-next'));
    const detail=document.createElement('details');detail.className='oficina-slide-text';page.append(detail);
    function show(){
      const s=d.slides[index];
      box.innerHTML=`<img class="oficina-slide-image" src="${window.WEBLAB_OFICINA_SLIDES[index+1]}" alt="Slide ${index+1}: ${esc(s.titulo)}">`;
      detail.innerHTML=`<summary>Texto e código deste slide</summary><h2>${esc(s.titulo)}</h2>${s.onde?`<p>${esc(s.onde)}</p>`:''}${s.codigo?`<pre><code>${esc(s.codigo)}</code></pre>`:''}${list(s.texto)}${s.teste?`<p><strong>Teste:</strong> ${esc(s.teste)}</p>`:''}`;
      document.querySelector('#slide-count').textContent=`${index+1} de ${d.slides.length}`;
      document.querySelector('#slide-prev').disabled=index===0;document.querySelector('#slide-next').disabled=index===d.slides.length-1;
      history.replaceState(null,'','#'+(index+1));
    }
    function move(delta){index=Math.max(0,Math.min(d.slides.length-1,index+delta));show();}
    function toggle(){presenting=!presenting;page.classList.toggle('is-presenting',presenting);document.body.classList.toggle('oficina-presenting',presenting);present.setAttribute('aria-pressed',String(presenting));present.textContent=presenting?'Sair da apresentação':'Apresentar';}
    document.querySelector('#slide-prev').addEventListener('click',()=>move(-1));document.querySelector('#slide-next').addEventListener('click',()=>move(1));present.addEventListener('click',toggle);
    document.addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select'))return;if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}if(e.key==='Escape'&&presenting)toggle();});show();
  }
  window.WEBLAB_OFICINA={resources,render,renderSlides};
})();
