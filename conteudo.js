/* Edite este arquivo para personalizar seu portal. Não inclua dados pessoais de alunos. */
window.WEBLAB = {
  professor: 'Fabrício Rodrigues',
  ano: '2026',
  atividades: [
    {
      id: 'portfolio', numero: '01', categoria: 'html', tecnologia: 'HTML', tipo: 'Revisão criativa',
      titulo: 'Uma página sobre você.', subtitulo: 'Meu primeiro portfólio',
      resumo: 'Apresente suas ideias, seus interesses e o que você quer construir. Tudo começa com uma boa estrutura.',
      tempo: '2 aulas sugeridas', formato: 'Individual', tags: ['HTML semântico', 'Links', 'Imagens'],
      objetivo: 'Construir um portfólio pessoal com conteúdo autoral e uma estrutura HTML clara e acessível.',
      desafio: 'Você quer apresentar seus trabalhos para outras pessoas. Crie uma página com apresentação, interesses, três ideias de projetos e links úteis. Use apenas informações que você deseja tornar públicas.',
      etapas: [
        ['Planeje o conteúdo', 'Escreva uma breve apresentação e escolha três projetos que gostaria de criar. Desenhe no papel a ordem das seções antes de abrir o editor.'],
        ['Prepare a estrutura', 'Baixe a base, extraia o ZIP e abra index.html no editor. Use header, nav, main, section e footer para organizar a página.'],
        ['Dê significado ao HTML', 'Inclua um h1, títulos h2, parágrafos e uma lista. Adicione links entre as seções e uma imagem sua ou de um tema escolhido, com texto alternativo adequado.'],
        ['Teste e explique', 'Abra a página no navegador, teste os links e navegue com a tecla Tab. Explique para um colega o motivo de cada elemento semântico escolhido.']
      ],
      checklist: ['Minha página tem um título principal e seções bem identificadas.', 'Os links internos e externos funcionam.', 'A imagem tem texto alternativo adequado ao conteúdo.', 'O conteúdo é autoral e não expõe dados privados.', 'Consigo explicar a função das principais tags que usei.'],
      entrega: 'Organize a pasta com index.html e as imagens utilizadas. Acrescente um pequeno texto com o que aprendeu e uma dificuldade que resolveu. O professor informará o canal e o prazo de entrega.',
      extra: 'Crie uma seção “O que estou aprendendo” e organize os assuntos em uma lista com links para a documentação.',
      codigo: '<section id="sobre">\n  <h2>Sobre mim</h2>\n  <p>Uma apresentação escrita por você.</p>\n</section>',
      arquivo: 'downloads/portfolio-base.zip'
    },
    {
      id: 'responsivo', numero: '02', categoria: 'css', tecnologia: 'CSS', tipo: 'Projeto de layout',
      titulo: 'Uma ideia em toda tela.', subtitulo: 'Página de divulgação responsiva',
      resumo: 'Transforme uma ideia em uma página que funciona bem no celular e no computador.',
      tempo: '2 a 3 aulas sugeridas', formato: 'Individual ou dupla', tags: ['Flexbox', 'CSS Grid', 'Responsividade'],
      objetivo: 'Criar uma página de divulgação com identidade visual própria e layout adaptável a diferentes larguras de tela.',
      desafio: 'Escolha um evento, uma iniciativa cultural ou um serviço fictício. Crie uma página com apresentação, três destaques e uma chamada para ação. Deixe claro quando as informações forem fictícias.',
      etapas: [
        ['Escolha sua identidade', 'Defina o tema, escreva os textos e escolha uma paleta com bom contraste. Baixe e extraia o projeto-base.'],
        ['Organize o layout', 'Use Flexbox para alinhar o cabeçalho e CSS Grid para os cartões. Defina espaçamentos consistentes e uma largura máxima para o conteúdo.'],
        ['Adapte para telas menores', 'Comece pela versão para celular. Use uma media query para ampliar a grade em telas largas. Evite larguras fixas que causem rolagem horizontal.'],
        ['Confira a experiência', 'Teste aproximadamente em 360px, 768px e 1280px. Use Tab para conferir o foco e verifique se o conteúdo continua legível ao ampliar o navegador.']
      ],
      checklist: ['O site tem cabeçalho, apresentação, três destaques e rodapé.', 'O layout se adapta ao celular e ao computador.', 'Não há rolagem horizontal nas larguras testadas.', 'Textos e botões têm contraste e tamanho legível.', 'Os links têm foco visível e funcionam pelo teclado.'],
      entrega: 'Entregue a pasta do projeto com HTML, CSS e imagens locais. Inclua capturas das versões de celular e computador e descreva uma decisão de layout. O professor definirá o canal e o prazo.',
      extra: 'Adicione uma preferência por movimento reduzido e documente como testou sua página pelo teclado.',
      codigo: '.grade {\n  display: grid;\n  gap: 1.5rem;\n}\n@media (min-width: 48rem) {\n  .grade { grid-template-columns: repeat(3, 1fr); }\n}',
      arquivo: 'downloads/responsivo-base.zip'
    },
    {
      id: 'catalogo', numero: '03', categoria: 'js', tecnologia: 'JavaScript', tipo: 'Desafio interativo',
      titulo: 'Uma página que responde.', subtitulo: 'Catálogo com filtros',
      resumo: 'Dê vida aos cartões: leia cliques, filtre categorias e mostre o resultado na página.',
      tempo: '3 aulas sugeridas', formato: 'Individual ou dupla', tags: ['DOM', 'Eventos', 'Filtros'],
      objetivo: 'Usar JavaScript para filtrar os itens de um catálogo e comunicar o resultado de forma acessível.',
      desafio: 'Crie um catálogo de livros, jogos ou projetos fictícios. Organize pelo menos seis itens em duas categorias e permita que o visitante escolha o que quer ver, sem recarregar a página.',
      etapas: [
        ['Prepare os itens', 'Baixe a base e crie pelo menos seis cartões. Use data-categoria para identificar a categoria de cada um. Escreva nomes e descrições autorais.'],
        ['Escute os cliques', 'Selecione os botões com querySelectorAll e registre eventos com addEventListener. Leia a categoria escolhida por meio de dataset.'],
        ['Filtre e dê retorno', 'Percorra os cartões e altere a propriedade hidden para mostrar os itens correspondentes. Atualize aria-pressed nos botões e a quantidade de resultados em uma região aria-live.'],
        ['Investigue os casos de teste', 'Teste cada categoria, a opção Todos e um filtro sem resultado. Confira o teclado, as telas pequenas e as mensagens do console do navegador.']
      ],
      checklist: ['Meu catálogo possui pelo menos seis itens em duas categorias.', 'Os filtros e a opção Todos funcionam sem recarregar.', 'O botão selecionado tem indicação visual e aria-pressed.', 'A quantidade de resultados é atualizada na página.', 'Não há erros no console ao usar os filtros.'],
      entrega: 'Entregue HTML, CSS e JavaScript organizados. Escreva quais testes realizou e explique como o filtro decide mostrar ou esconder um cartão. Prazo e canal serão informados pelo professor.',
      extra: 'Adicione uma busca por título que funcione junto com o filtro de categoria e exiba uma mensagem quando nenhum item for encontrado.',
      codigo: 'const cartoes = document.querySelectorAll("[data-categoria]");\n\nfunction filtrar(categoria) {\n  cartoes.forEach((cartao) => {\n    cartao.hidden = categoria !== "todos"\n      && cartao.dataset.categoria !== categoria;\n  });\n}',
      arquivo: 'downloads/catalogo-base.zip'
    }
  ]
};
