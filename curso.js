(() => {
  'use strict';
  const C = window.WEBLAB_CURSO;
  if (!C) return;
  const $ = (s) => document.querySelector(s);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
  const url = (id) => 'aulas.html?id=' + encodeURIComponent(id);
  const table = (rows) => `<div class="lesson-table-wrap"><table class="lesson-table">
    <thead><tr>${rows[0].map((x) => `<th scope="col">${esc(x)}</th>`).join('')}</tr></thead>
    <tbody>${rows.slice(1).map((r) => `<tr>${r.map((x) => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const refs = (ids) => '<ul>' + ids.map((id) => C.referencias.find((r) => r.id === id)).filter(Boolean)
    .map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.titulo)} ↗</a></li>`).join('') + '</ul>';
  const resources = (a) => `<div class="detail-actions">
    <a class="button primary" href="${esc(a.projetoZIP)}" download>Baixar projeto da aula ↓</a>
    <a class="button secondary" href="slides.html?id=${esc(a.id)}">Apresentar slides ↗</a>
    <a class="button secondary" href="${esc(a.slidePDF)}">Slides em PDF ↗</a>
    <a class="button secondary" href="${esc(a.aulaPDF)}">Conteúdo em PDF ↗</a>
    <a class="button secondary" href="registro.html?id=${esc(a.id)}">Registrar testes e entregar ↗</a>
    ${a.modelo ? `<a class="button secondary" href="${esc(a.modelo)}">Modelo após a tentativa ↗</a>` : ''}</div>`;
  if ($('#course-lessons')) $('#course-lessons').innerHTML = C.aulas.map((a) => `<a class="course-row" href="${url(a.id)}">
    <span class="lesson-date"><strong>${esc(a.dataCurta)}</strong><small>SEXTA-FEIRA</small></span>
    <span class="lesson-name"><small>AULA ${esc(a.numero)} / ${esc(a.eixo)}</small><h3>${esc(a.titulo)}</h3><p>${esc(a.subtitulo)}</p></span><span class="lesson-row-arrow" aria-hidden="true">↗</span></a>`).join('');
  if ($('#course-downloads')) $('#course-downloads').innerHTML = C.aulas.slice(1).map((a) => `<article class="download-row"><h3>${esc(a.dataCurta)} · ${esc(a.titulo)}</h3>${resources(a)}</article>`).join('');
  if ($('#course-lesson')) {
    const a = C.aulas.find((x) => x.id === new URLSearchParams(location.search).get('id'));
    if (!a) { $('#course-lesson').innerHTML = '<h1>Aula não encontrada</h1><a href="index.html#encontros">← Voltar às aulas</a>'; return; }
    document.title = `${a.dataCurta} · ${a.titulo} · WebLab`;
    const current = Boolean(a.slides);
    const next = C.aulas[C.aulas.indexOf(a) + 1];
    $('#course-lesson').innerHTML = `<header class="detail-hero"><p class="eyebrow">AULA ${esc(a.numero)} / ${esc(a.dataCurta)}/2026 / ${esc(a.eixo)}</p>
      <h1>${esc(a.titulo)}</h1><p class="lead">${esc(a.subtitulo)}</p><p>VS Code com Live Server · Um computador por aluno</p>
      <div class="detail-actions"><a class="button secondary" href="index.html#encontros">← Voltar às aulas</a>${current ? `<a class="button primary" href="slides.html?id=${esc(a.id)}">Apresentar slides ↗</a>` : '<a class="button primary" href="materiais/Slides-Aula-01.pdf">Slides da abertura ↗</a>'}</div></header>
      <div class="detail-layout"><article class="lesson-content">
      <section id="objetivos"><h2>O que vamos aprender</h2><ul>${a.objetivos.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><div class="soft-box"><h3>Ponto de partida</h3><p>${esc(a.retomada)}</p></div></section>
      ${a.mapa ? `<section><h2>Mapa da aula</h2>${table(a.mapa)}</section>` : ''}
      ${a.campos ? `<section><h2>Especificação dos campos</h2>${table([['Campo','Controle','Regra'],...a.campos])}</section>` : ''}
      <section id="conteudo-aula">${a.secoes.map((s) => `<section${s.id ? ` id="${esc(s.id)}"` : ''}><h2>${esc(s.titulo)}</h2>${s.texto.map((t) => `<p>${esc(t)}</p>`).join('')}${s.tabela ? table(s.tabela) : ''}${s.codigo ? `<pre><code>${esc(s.codigo)}</code></pre>` : ''}${s.refs?.length ? `<details><summary>Referências desta seção</summary>${refs(s.refs)}</details>` : ''}</section>`).join('')}</section>
      <section id="atividade"><h2>Prática da aula</h2><div class="soft-box"><h3>Baixar e abrir no computador</h3><p>${current ? 'O projeto deste encontro contém somente index.html, style.css e script.js. Ele já traz o ponto de partida da aula. Você também pode continuar sua própria versão anterior.' : 'Use as bases da aula de abertura e a ficha digital para registrar o diagnóstico.'}</p><p>Extraia o ZIP. No VS Code, use Arquivo → Abrir Pasta. Abra index.html e escolha Open with Live Server. Salve com Ctrl+S e observe o navegador.</p><p><a href="como-usar.html">Como baixar, abrir e entregar ↗</a></p></div><ol>${a.atividade.map((x) => `<li>${esc(x)}</li>`).join('')}</ol><p><strong>Entrega:</strong> ${esc(a.produto)}</p>${current ? resources(a) : '<div class="detail-actions"><a class="button primary" href="diagnostico.html">Ficha digital ↗</a><a class="button secondary" href="materiais/Diagnostico-base.zip" download>Projeto do diagnóstico ↓</a><a class="button secondary" href="materiais/Formulario-base.zip" download>Primeiro formulário ↓</a></div>'}</section>
      ${a.testes ? `<section id="testes"><h2>Casos de teste</h2><p>Compare a previsão com o que aconteceu. Registre também falhas e correções.</p>${table(a.testes)}</section>` : ''}
      ${a.erros ? `<section><h2>Erros que merecem atenção</h2><ul>${a.erros.map((e) => `<li>${esc(e)}</li>`).join('')}</ul></section>` : ''}
      <section id="roteiro"><h2>Etapas do encontro</h2><ol>${a.agenda.map((b) => `<li>${esc(b.acao)}</li>`).join('')}</ol></section>
      <section id="conferencia"><h2>Checklist</h2>${a.checklist.map((x) => `<label class="check-item"><input type="checkbox"><span>${esc(x)}</span></label>`).join('')}<p class="storage-note">As marcações não são salvas e não enviam uma entrega.</p></section>
      ${current ? `<section class="soft-box"><h2>Uma explicação para fechar</h2><p>${esc(a.saida)}</p></section>` : ''}
      <section><h2>Uma descoberta útil</h2><p>${esc(a.curiosidade)}</p><h2>Para ir além</h2><p>${esc(a.extensao)}</p></section>
      <section id="referencias"><h2>Referências para tirar dúvidas</h2>${refs(a.refs)}<p>Consulta em 22/10/2026. Links externos precisam de internet. Os títulos indicam os materiais em inglês.</p></section>
      <nav class="return-nav"><a class="button secondary" href="index.html#encontros">← Voltar às aulas</a>${next ? `<a class="button primary" href="${url(next.id)}">Próxima aula · ${esc(next.dataCurta)} →</a>` : ''}</nav></article>
      <aside class="detail-aside"><p class="eyebrow">AULA ${esc(a.numero)} / ${esc(a.dataCurta)}</p>${current ? resources(a) : ''}<a class="button secondary" href="materiais/Caderno-do-Estudante-Formularios.pdf">Caderno completo em PDF ↗</a><button class="button secondary" id="print-lesson">Imprimir esta aula</button><nav class="lesson-nav"><a href="#objetivos">Objetivos</a><a href="#conteudo-aula">Conteúdo e exemplos</a><a href="#atividade">Prática</a>${a.testes ? '<a href="#testes">Testes</a>' : ''}<a href="#referencias">Referências</a></nav><p>Sem aula em 20/11. Avaliação em 11/12. Devolutiva e recuperação em 18/12.</p></aside></div>`;
    $('#print-lesson').addEventListener('click', () => window.print());
  }
  if ($('#lesson-slide')) {
    const a = C.aulas.find((x) => x.id === new URLSearchParams(location.search).get('id') && x.slides) || C.aulas[1];
    let index = 0;
    document.title = `Slides · ${a.dataCurta} · ${a.titulo}`;
    $('#slide-back').href = url(a.id);$('#slide-pdf').href = a.slidePDF;
    const show = () => {
      const s = a.slides[index];
      $('#lesson-slide').innerHTML = `<p class="eyebrow">AULA ${esc(a.numero)} / ${esc(a.dataCurta)}/2026</p><h1>${esc(s.titulo)}</h1>${s.texto.map((t) => `<p>${esc(t)}</p>`).join('')}${s.tabela ? table(s.tabela) : ''}${s.codigo ? `<pre><code>${esc(s.codigo)}</code></pre>` : ''}`;
      $('#slide-count').textContent = `${index + 1} de ${a.slides.length}`;
      $('#slide-prev').disabled = index === 0;$('#slide-next').disabled = index === a.slides.length - 1;
    };
    const move = (delta) => { index = Math.max(0,Math.min(a.slides.length - 1,index + delta));show(); };
    $('#slide-prev').addEventListener('click', () => move(-1));$('#slide-next').addEventListener('click', () => move(1));
    document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') move(1);if (e.key === 'ArrowLeft') move(-1); });show();
  }
  if ($('#registro-form')) {
    const a = C.aulas.find((x) => x.id === new URLSearchParams(location.search).get('id') && x.testes) || C.aulas[1];
    $('#registro-title').textContent = `Aula ${a.numero} · ${a.dataCurta} · Registro de testes`;
    $('#registro-back').href = url(a.id);
    $('#registro-testes').innerHTML = a.testes.slice(1).map(([caso,expected],i) => `<fieldset class="diagnostic-question"><legend>${esc(caso)}</legend><p>Esperado: ${esc(expected)}</p><label for="teste-${i}">Resultado observado</label><select id="teste-${i}" name="teste-${i}"><option value="Não testei">Não testei</option><option>Passou</option><option>Falhou</option></select><label for="obs-${i}">Observação ou correção</label><input id="obs-${i}" name="obs-${i}"></fieldset>`).join('');
    $('#registro-form').addEventListener('submit', (event) => {
      event.preventDefault();const data = new FormData(event.currentTarget);
      const nome = String(data.get('nome') || '').trim(), turma = String(data.get('turma') || '').trim();
      if (!nome || !turma) { $('#registro-status').textContent = 'Informe nome e turma.';return; }
      const texto = ['WEBLAB - REGISTRO DA AULA ' + a.numero,'Data: ' + a.dataCurta + '/2026','Nome: ' + nome,'Turma: ' + turma,'',...a.testes.slice(1).flatMap(([caso,expected],i) => [caso,'Esperado: ' + expected,'Observado: ' + data.get('teste-' + i),'Registro: ' + (data.get('obs-' + i) || '(sem observação)'),'']),a.saida,String(data.get('explicacao') || '(sem resposta)'),'Apoio recebido: ' + (data.get('apoio') || '(sem registro)')].join('\n');
      const slug = (v) => v.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'-').toLowerCase();
      const name = `registro-aula-${a.numero}-${slug(turma)}-${slug(nome)}.txt`;
      const objectURL = URL.createObjectURL(new Blob(['\uFEFF' + texto],{type:'text/plain;charset=utf-8'}));
      const link = document.createElement('a');link.href = objectURL;link.download = name;link.click();setTimeout(() => URL.revokeObjectURL(objectURL),1000);
      $('#registro-status').textContent = `${name} preparado. Entregue o TXT e o ZIP do projeto ao professor. Não há envio automático.`;
    });
  }
})();
