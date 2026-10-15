(() => {
  'use strict';
  const course = window.WEBLAB;
  if (!course) return;
  const $ = (selector) => document.querySelector(selector);
  const all = (selector) => [...document.querySelectorAll(selector)];
  const escape = (text) => String(text).replace(/[&<>"']/g, (character) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character]));
  const normalize = (value) => value.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  function identity() {
    all('[data-teacher]').forEach((node) => { node.textContent = course.professor; });
    all('[data-year]').forEach((node) => { node.textContent = course.ano; });
  }
  identity();
  all('[data-print]').forEach((button) => button.addEventListener('click', () => window.print()));

  const art = {
    html: '<div class="mini-page"><div class="mini-top"><i></i><i></i><i></i></div><div class="mini-content"><span class="mini-avatar">f.</span><span class="mini-lines"><b></b><i></i><i></i></span></div><div class="mini-bottom"><span></span><span></span><span></span></div></div>',
    css: '<div class="mini-devices"><div class="mini-screen"><span></span><div><i></i><i></i><i></i></div></div><div class="mini-phone"><span></span><span></span><span></span></div></div>',
    js: '<div class="mini-catalog"><div class="mini-filters"><span>Todos</span><span>Livros</span><span>Jogos</span></div><div class="mini-items"><span>Aa</span><span>✳</span><span>{ }</span></div></div><span class="mini-cursor">➚</span>'
  };
  if ($('#activity-grid')) {
    $('#activity-grid').innerHTML = course.atividades.map((item) => `<article class="activity-card" data-category="${escape(item.categoria)}" data-id="${escape(item.id)}"><div class="card-visual ${escape(item.categoria)}" aria-hidden="true"><span class="card-tech">${escape(item.tecnologia)}</span>${art[item.categoria] || ''}<span class="card-no">${escape(item.numero)}</span></div><div class="card-body"><div class="card-kicker"><span>${escape(item.tipo)}</span><span>${escape(item.tempo)}</span></div><h3><a href="atividade.html?id=${encodeURIComponent(item.id)}">${escape(item.titulo)}</a></h3><p>${escape(item.resumo)}</p><div class="tech-tags">${item.tags.map((tag) => `<span>${escape(tag)}</span>`).join('')}</div></div><div class="card-footer"><a href="atividade.html?id=${encodeURIComponent(item.id)}" aria-label="Abrir roteiro: ${escape(item.subtitulo)}">Abrir roteiro <span aria-hidden="true">↗</span></a><a href="${escape(item.arquivo)}" download aria-label="Baixar base: ${escape(item.subtitulo)}">↓ Baixar base</a></div></article>`).join('');
    let category = 'all';
    function filter() {
      const term = normalize($('#activity-search').value.trim());
      let count = 0;
      all('.activity-card').forEach((card) => {
        const item = course.atividades.find((candidate) => candidate.id === card.dataset.id);
        const matches = (category === 'all' || item.categoria === category) && normalize([item.titulo, item.subtitulo, item.resumo, ...item.tags, item.tecnologia].join(' ')).includes(term);
        card.hidden = !matches;
        if (matches) count++;
      });
      $('#empty-state').hidden = count !== 0;
      $('#filter-status').textContent = `${count} ${count === 1 ? 'atividade encontrada' : 'atividades encontradas'}.`;
    }
    all('[data-filter]').forEach((button) => button.addEventListener('click', () => {
      category = button.dataset.filter;
      all('[data-filter]').forEach((candidate) => {
        const selected = candidate === button;
        candidate.classList.toggle('selected', selected);
        candidate.setAttribute('aria-pressed', String(selected));
      });
      filter();
    }));
    $('#activity-search').addEventListener('input', filter);
    filter();
  }

  if ($('#demo-button')) {
    let clicks = 0;
    $('#demo-button').addEventListener('click', () => {
      clicks++;
      $('#demo-feedback').textContent = `Você clicou ${clicks} ${clicks === 1 ? 'vez' : 'vezes'}. Isso é JavaScript!`;
    });
    const code = {
      html: '<h1>Olá, mundo!</h1>\n<button>Testar interação ↗</button>',
      css: 'h1 { color: #183e35; }\nbutton { background: #183e35; color: white; }',
      js: "botao.addEventListener('click', () => {\n  cliques += 1; // Experimente o botão acima.\n});"
    };
    const tabs = all('[data-code]');
    function selectTab(button) {
      tabs.forEach((tab) => {
        const selected = button === tab;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      $('#demo-code').textContent = code[button.dataset.code];
      $('#code-panel').setAttribute('aria-labelledby', button.id);
    }
    tabs.forEach((button, index) => {
      button.addEventListener('click', () => selectTab(button));
      button.addEventListener('keydown', (event) => {
        let next;
        if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
        if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
        if (event.key === 'Home') next = tabs[0];
        if (event.key === 'End') next = tabs[tabs.length - 1];
        if (next) { event.preventDefault(); selectTab(next); next.focus(); }
      });
    });
  }

  if ($('#lesson')) {
    const id = new URLSearchParams(window.location.search).get('id');
    const activity = course.atividades.find((item) => item.id === id);
    if (!activity) {
      document.title = 'Roteiro não encontrado · WebLab';
      $('#lesson').innerHTML = '<header class="detail-hero"><p class="eyebrow">WEBLAB</p><h1>Roteiro não encontrado.</h1><p class="lead">Escolha uma das atividades disponíveis no portal.</p><div class="detail-actions"><a class="button primary" href="index.html#atividades">Ver atividades →</a></div></header>';
      return;
    }
    document.title = `${activity.subtitulo} · WebLab`;
    const next = course.atividades[course.atividades.indexOf(activity) + 1];
    $('#lesson').innerHTML = `<header class="detail-hero"><p class="breadcrumbs"><a href="index.html">WebLab</a> / <a href="index.html#atividades">Atividades</a> / Roteiro ${escape(activity.numero)}</p><p class="eyebrow">ROTEIRO ${escape(activity.numero)} / ${escape(activity.tecnologia.toUpperCase())}</p><h1>${escape(activity.subtitulo)}</h1><p class="lead">${escape(activity.objetivo)}</p><div class="meta-pills"><span>Roteiro proposto</span><span>${escape(activity.formato)}</span><span>${escape(activity.tempo)}</span></div></header><div class="detail-layout"><div class="lesson-content"><section id="desafio"><h2>Uma ideia para colocar em prática.</h2><p>${escape(activity.desafio)}</p></section><section id="passos"><h2>Seu roteiro de criação.</h2>${activity.etapas.map(([title, description], index) => `<div class="lesson-step"><span class="step-number">${index + 1}</span><div><h3>${escape(title)}</h3><p>${escape(description)}</p></div></div>`).join('')}</section><section id="exemplo"><h2>Uma pista para começar.</h2><p>Este trecho demonstra um dos conceitos do roteiro. Experimente, modifique e explique o resultado.</p><pre><code>${escape(activity.codigo)}</code></pre></section><section id="checklist"><h2>Antes de compartilhar.</h2><div class="progress-row"><span>Seu checklist de conferência</span><strong id="check-progress">0/${activity.checklist.length}</strong></div><div class="progress-track" role="progressbar" aria-label="Itens conferidos" aria-valuemin="0" aria-valuemax="${activity.checklist.length}" aria-valuenow="0" id="check-track"><span id="check-bar" style="width:0%"></span></div><div class="checklist">${activity.checklist.map((text, index) => `<label class="check-item"><input type="checkbox" data-check="${index}"><span>${escape(text)}</span></label>`).join('')}</div><p class="storage-note" id="storage-note">As marcações ficam salvas apenas neste navegador. Elas não enviam uma entrega ao professor.</p></section><section id="entrega"><h2>Organize sua entrega.</h2><p>${escape(activity.entrega)}</p></section><section class="soft-box"><h3>Quer ir um pouco além?</h3><p>${escape(activity.extra)}</p></section><div class="detail-actions"><a class="button secondary" href="index.html#atividades">← Todas as atividades</a>${next ? `<a class="button primary" href="atividade.html?id=${encodeURIComponent(next.id)}">Próximo roteiro →</a>` : '<a class="button primary" href="guia.html">Consultar guia rápido ↗</a>'}</div></div><aside class="detail-aside"><p class="eyebrow">PREPARE SEU ESPAÇO</p><a class="button primary" href="${escape(activity.arquivo)}" download>Baixar projeto-base <span aria-hidden="true">↓</span></a><button class="button secondary" type="button" data-lesson-print>Imprimir roteiro <span aria-hidden="true">↗</span></button><p>Extraia o ZIP, abra a pasta no seu editor e comece pelo arquivo index.html.</p><nav class="lesson-nav" aria-label="Sumário do roteiro"><a href="#desafio">O desafio</a><a href="#passos">Passo a passo</a><a href="#exemplo">Exemplo de código</a><a href="#checklist">Checklist</a><a href="#entrega">Entrega</a><a href="guia.html">Guia rápido ↗</a></nav><p class="storage-note">Prof. ${escape(course.professor)}<br>Sequência e prazos definidos em aula.</p></aside></div>`;
    $('[data-lesson-print]').addEventListener('click', () => window.print());
    const key = `weblab-checklist-v1-${activity.id}`;
    let saved = [];
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(parsed)) saved = parsed;
    } catch { /* Use an empty checklist when local storage is unavailable. */ }
    all('[data-check]').forEach((checkbox, index) => { checkbox.checked = saved[index] === true; });
    function updateProgress(persist) {
      const checks = all('[data-check]');
      const count = checks.filter((checkbox) => checkbox.checked).length;
      $('#check-progress').textContent = `${count}/${checks.length}`;
      $('#check-track').setAttribute('aria-valuenow', count);
      $('#check-bar').style.width = `${count / checks.length * 100}%`;
      if (persist) {
        try { localStorage.setItem(key, JSON.stringify(checks.map((checkbox) => checkbox.checked))); }
        catch { $('#storage-note').textContent = 'O armazenamento deste navegador está indisponível. As marcações serão mantidas apenas enquanto esta página estiver aberta.'; }
      }
    }
    all('[data-check]').forEach((checkbox) => checkbox.addEventListener('change', () => updateProgress(true)));
    updateProgress(false);
  }
})();
