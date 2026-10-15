/* Conteúdo do período. Edite os encontros e referências aqui. */
window.WEBLAB_CURSO = {
  "titulo": "Formulários para a web",
  "professor": "Fabrício Rodrigues",
  "inicio": "2026-10-16",
  "fim": "2026-12-18",
  "semAula": "2026-11-20",
  "encontros": 9,
  "minutosPorEncontro": 100,
  "aulasDe50": 18,
  "horasRelogio": 15,
  "contexto": "Curso Técnico em Informática. Um computador por aluno. Planejamento proposto para a continuidade da turma.",
  "projeto": "Chamado de suporte ao laboratório",
  "referencias": [
    {
      "id": "abner",
      "titulo": "Base anterior: portal do Prof. Ábner Lucas",
      "url": "https://abner-lucas.github.io/programacao-web/"
    },
    {
      "id": "primeiro",
      "titulo": "MDN: seu primeiro formulário",
      "url": "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Forms/Your_first_form"
    },
    {
      "id": "inputs",
      "titulo": "MDN: tipos de input",
      "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types"
    },
    {
      "id": "labels",
      "titulo": "W3C WAI: rótulos dos controles",
      "url": "https://www.w3.org/WAI/tutorials/forms/labels/"
    },
    {
      "id": "estrutura",
      "titulo": "W3C WAI: agrupamento de controles",
      "url": "https://www.w3.org/WAI/tutorials/forms/grouping/"
    },
    {
      "id": "validacao",
      "titulo": "MDN: validação de formulários",
      "url": "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Forms/Form_validation"
    },
    {
      "id": "css",
      "titulo": "MDN: estilização de formulários",
      "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms"
    },
    {
      "id": "grid",
      "titulo": "MDN: fundamentos de CSS Grid",
      "url": "https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout"
    },
    {
      "id": "submit",
      "titulo": "MDN: evento submit",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event"
    },
    {
      "id": "formdata",
      "titulo": "MDN: uso de FormData",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects"
    },
    {
      "id": "custom",
      "titulo": "MDN: setCustomValidity",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity"
    },
    {
      "id": "mensagens",
      "titulo": "W3C WAI: notificações e erros",
      "url": "https://www.w3.org/WAI/tutorials/forms/notifications/"
    },
    {
      "id": "envio",
      "titulo": "MDN: envio de dados",
      "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data"
    },
    {
      "id": "botao",
      "titulo": "MDN: elemento button",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button"
    },
    {
      "id": "disabled",
      "titulo": "MDN: atributo disabled",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled"
    },
    {
      "id": "pages",
      "titulo": "GitHub: funcionamento do Pages",
      "url": "https://docs.github.com/pt/pages/getting-started-with-github-pages/what-is-github-pages"
    },
    {
      "id": "publicar",
      "titulo": "GitHub: configuração da publicação",
      "url": "https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"
    },
    {
      "id": "textcontent",
      "titulo": "MDN: textContent",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent"
    }
  ],
  "perguntas": [
    {
      "id": "H1",
      "area": "HTML",
      "titulo": "Título e parágrafo",
      "codigo": "<h1>Mostra de projetos</h1>\n<p>Trabalhos da turma de Informática.</p>",
      "enunciado": "Qual é a função de h1 e de p? Por que aumentar a fonte de um parágrafo não substitui a escolha de uma tag de título?"
    },
    {
      "id": "H2",
      "area": "HTML",
      "titulo": "Estrutura com significado",
      "codigo": "<main>\n  <section>\n    <h2>Projetos</h2>\n    <p>Conheça as ideias da turma.</p>\n  </section>\n</main>",
      "enunciado": "O que main e section organizam nesse trecho? Onde você colocaria o rodapé da página?"
    },
    {
      "id": "H3",
      "area": "HTML",
      "titulo": "Navegação e ação",
      "codigo": "<a href=\"projetos.html\">Ver projetos</a>\n<button type=\"button\">Mostrar detalhes</button>",
      "enunciado": "Qual elemento você usaria para abrir outra página? Qual usaria para executar uma ação na página atual? Justifique."
    },
    {
      "id": "C1",
      "area": "CSS",
      "titulo": "Seletores",
      "codigo": "<p class=\"aviso\">Atenção ao prazo.</p>\n\n.aviso { color: darkgreen; }",
      "enunciado": "Qual elemento recebe essa cor? O que mudaria se o seletor fosse #aviso e o HTML continuasse igual?"
    },
    {
      "id": "C2",
      "area": "CSS",
      "titulo": "Espaçamento",
      "codigo": ".cartao {\n  padding: 16px;\n  margin: 24px;\n}",
      "enunciado": "Explique onde aparecem padding e margin. Qual deles você alteraria para afastar o texto da borda do cartão?"
    },
    {
      "id": "C3",
      "area": "CSS",
      "titulo": "Layout responsivo",
      "codigo": ".grade { display: grid; gap: 16px; }\n@media (min-width: 768px) {\n  .grade { grid-template-columns: repeat(3, 1fr); }\n}",
      "enunciado": "Como os cartões tendem a se organizar em 360px e em 1024px? O que a media query está verificando?"
    },
    {
      "id": "J1",
      "area": "JavaScript",
      "titulo": "Seleção no DOM",
      "codigo": "<p id=\"mensagem\">Olá!</p>\n\nconst aviso = document.querySelector(\"#mensagem\");",
      "enunciado": "Qual elemento a variável aviso referencia? O que pode acontecer se o id tiver outro nome no HTML?"
    },
    {
      "id": "J2",
      "area": "JavaScript",
      "titulo": "Eventos",
      "codigo": "botao.addEventListener(\"click\", () => {\n  mensagem.textContent = \"Você clicou!\";\n});",
      "enunciado": "Quando o texto muda? Explique a função do evento click e da função que aparece no segundo argumento."
    },
    {
      "id": "J3",
      "area": "JavaScript",
      "titulo": "Estado da interface",
      "codigo": "botao.addEventListener(\"click\", () => {\n  painel.classList.toggle(\"aberto\");\n});",
      "enunciado": "O que toggle faz em dois cliques seguidos? É possível afirmar a aparência final sem conhecer o CSS?"
    }
  ],
  "aulas": [
    {
      "id": "aula-01",
      "data": "2026-10-16",
      "dataCurta": "16/10",
      "numero": "01",
      "eixo": "Diagnóstico",
      "titulo": "O que já sabemos sobre a web?",
      "subtitulo": "Diagnóstico de HTML, CSS e JavaScript e primeiro contato com formulários",
      "produto": "Ficha individual, página corrigida e primeiro formulário com dois campos.",
      "objetivos": [
        "Ler trechos de HTML, CSS e JavaScript e explicar o comportamento esperado.",
        "Localizar um erro de seletor e registrar como o corrigiu.",
        "Associar um rótulo a um campo no primeiro formulário."
      ],
      "retomada": "O portal anterior apresenta semântica HTML, Flexbox/Grid, responsividade, DOM, eventos e login simulado. A presença no material indica conteúdos trabalhados, e o diagnóstico verificará o domínio real da turma.",
      "conceitos": [
        "Semântica e navegação",
        "Seletores e responsividade",
        "DOM e eventos",
        "Primeiro formulário"
      ],
      "secoes": [
        {
          "titulo": "Diagnóstico como ponto de partida",
          "texto": [
            "A atividade inicial serve para orientar as próximas aulas. Registre o que consegue explicar sozinho, o que faz com uma pista e o que ainda precisa estudar. Uma resposta incompleta com raciocínio ajuda o professor a planejar a retomada.",
            "Responda às nove questões antes da conversa coletiva. Na prática, faça pequenas mudanças em uma página conhecida. Depois da tentativa individual, a turma discutirá as estratégias e as dúvidas."
          ],
          "codigo": ""
        },
        {
          "titulo": "Uma página conhecida, um problema por vez",
          "texto": [
            "Na base de diagnóstico, a classe do destaque e os seletores do JavaScript não correspondem ao HTML. Compare os nomes literalmente, leia o console e teste a página após cada alteração. Acrescente um cartão e explique por que escolheu as tags usadas."
          ],
          "codigo": ""
        },
        {
          "titulo": "A ponte para formulários",
          "texto": [
            "Um chamado de suporte precisa receber informações que uma página de divulgação apenas exibe. Começaremos com equipamento e descrição do problema. Os dados do exercício são fictícios e ficam no navegador.",
            "O label descreve o campo. Seu atributo for deve apontar para o id do controle. O name será a chave usada na coleta dos valores."
          ],
          "codigo": "<form id=\"chamado\">\n  <label for=\"equipamento\">Equipamento</label>\n  <input id=\"equipamento\" name=\"equipamento\">\n  <label for=\"descricao\">Descrição do problema</label>\n  <textarea id=\"descricao\" name=\"descricao\"></textarea>\n  <button type=\"button\">Protótipo em construção</button>\n</form>"
        }
      ],
      "atividade": [
        "Responder à ficha individual do diagnóstico.",
        "Corrigir a classe CSS e o seletor JavaScript da página-base, incluir um cartão e testar dois cliques.",
        "Criar um protótipo com equipamento e descrição, com rótulos associados.",
        "Registrar uma facilidade e uma dúvida para a próxima aula."
      ],
      "checklist": [
        "Expliquei uma decisão de HTML, uma de CSS e uma de JavaScript.",
        "Registrei o erro que encontrei e como testei a correção.",
        "Associei cada label ao id do campo."
      ],
      "agenda": [
        {
          "minutos": 5,
          "acao": "Acolhida, objetivo e orientação sobre o diagnóstico sem nota."
        },
        {
          "minutos": 25,
          "acao": "Respostas individuais às nove questões de leitura de código."
        },
        {
          "minutos": 25,
          "acao": "Prática individual com a página-base e observação do professor."
        },
        {
          "minutos": 15,
          "acao": "Discussão de estratégias e levantamento das dúvidas."
        },
        {
          "minutos": 25,
          "acao": "Demonstração e criação do primeiro formulário com dois campos."
        },
        {
          "minutos": 5,
          "acao": "Bilhete de saída e organização dos arquivos."
        }
      ],
      "avaliacao": "Observar separadamente HTML, CSS e JavaScript. Guardar evidências escritas e práticas antes de decidir quais conceitos retomar. O diagnóstico não compõe uma nota somativa.",
      "curiosidade": "Clicar em um rótulo associado pode levar o foco ao campo. Essa associação também ajuda tecnologias assistivas.",
      "refs": [
        "abner",
        "primeiro",
        "labels"
      ],
      "extensao": "Acrescentar um campo de contato fictício e justificar o tipo escolhido.",
      "apoio": "Oferecer uma pista por vez: conferir nome da classe, conferir id e usar o console. Registrar quando o aluno usou a pista."
    },
    {
      "id": "aula-02",
      "data": "2026-10-23",
      "dataCurta": "23/10",
      "numero": "02",
      "eixo": "HTML",
      "titulo": "Campos com significado",
      "subtitulo": "Estrutura, rótulos e regras nativas do formulário",
      "produto": "Versão 1 do formulário com campos e restrições HTML.",
      "objetivos": [
        "Distinguir id, name, type e value.",
        "Escolher controles adequados a texto, escolha única e múltiplas opções.",
        "Usar required e restrições coerentes com o dado solicitado."
      ],
      "retomada": "Retomar as dificuldades de HTML observadas em 16/10. A apresentação de um formulário organiza dados e precisa de campos identificáveis.",
      "conceitos": [
        "form e label",
        "input, select e textarea",
        "fieldset e legend",
        "id, name e validação nativa"
      ],
      "secoes": [
        {
          "titulo": "Um campo tem mais de um nome",
          "texto": [
            "id identifica um elemento na página e conecta o label. name identifica o dado coletado. type define o comportamento do controle, e value representa seu valor. Os ids devem ser únicos no documento.",
            "Use rótulos visíveis. Um placeholder pode dar um exemplo curto, mas desaparece durante o preenchimento e não substitui o label."
          ],
          "codigo": "<label for=\"contato\">E-mail de contato fictício</label>\n<input id=\"contato\" name=\"contato\" type=\"email\" required>"
        },
        {
          "titulo": "Controles adequados ao problema",
          "texto": [
            "Use input text para um código de equipamento como PC-07. Esse código não é uma quantidade para calcular. Use select para escolher uma categoria e textarea para descrever o defeito.",
            "Radio permite uma escolha em um grupo com o mesmo name. Checkbox permite marcar opções independentes. Agrupe opções relacionadas em fieldset, com legend que explique o conjunto."
          ],
          "codigo": "<fieldset>\n  <legend>Prioridade do chamado</legend>\n  <label><input type=\"radio\" name=\"prioridade\" value=\"normal\" required> Normal</label>\n  <label><input type=\"radio\" name=\"prioridade\" value=\"alta\"> Alta</label>\n</fieldset>"
        },
        {
          "titulo": "Regras que o navegador já conhece",
          "texto": [
            "required pede um valor. type=email confere um formato de e-mail, sem provar que a caixa existe. minlength e maxlength delimitam comprimentos. min e max se aplicam, por exemplo, a quantidades numéricas.",
            "Explique a regra antes do erro. Se a descrição precisa de pelo menos 20 caracteres, apresente essa orientação junto ao campo. Comece com validação nativa e teste o formulário sem JavaScript."
          ],
          "codigo": "<label for=\"descricao\">Descrição do problema</label>\n<p id=\"ajuda\">Escreva pelo menos 20 caracteres.</p>\n<textarea id=\"descricao\" name=\"descricao\" required\n  minlength=\"20\" maxlength=\"500\" aria-describedby=\"ajuda\"></textarea>"
        }
      ],
      "atividade": [
        "Definir quais dados são necessários a um chamado fictício.",
        "Criar campos de solicitante fictício, contato, equipamento, categoria, prioridade e descrição.",
        "Adicionar duas opções independentes em checkbox para sintomas observados.",
        "Testar campos vazios, e-mail sem formato adequado e descrição curta."
      ],
      "checklist": [
        "Todos os campos têm rótulo e name.",
        "Os ids são únicos e correspondem aos labels.",
        "Radio e checkbox representam escolhas adequadas.",
        "As restrições têm instruções visíveis."
      ],
      "agenda": [
        {
          "minutos": 10,
          "acao": "Retomada das evidências de HTML do diagnóstico."
        },
        {
          "minutos": 15,
          "acao": "Modelagem dos dados do chamado e escolha dos controles."
        },
        {
          "minutos": 20,
          "acao": "Demonstração de label, id, name, fieldset e legend."
        },
        {
          "minutos": 35,
          "acao": "Construção individual do formulário e regras nativas."
        },
        {
          "minutos": 15,
          "acao": "Teste por um colega com casos vazios e inválidos."
        },
        {
          "minutos": 5,
          "acao": "Registro do que o navegador validou."
        }
      ],
      "avaliacao": "Conferir associação de rótulos, uso de name e escolha dos controles. Pedir que cada aluno explique um campo e uma restrição.",
      "curiosidade": "Um button dentro de um formulário pode atuar como envio quando o tipo não é especificado. Declarar type evita ações acidentais.",
      "refs": [
        "inputs",
        "labels",
        "estrutura",
        "validacao",
        "botao"
      ],
      "extensao": "Criar uma pequena tabela justificando tipo, name e regra de cada campo.",
      "apoio": "Disponibilizar um campo pronto como modelo e pedir a criação dos demais por analogia."
    },
    {
      "id": "aula-03",
      "data": "2026-10-30",
      "dataCurta": "30/10",
      "numero": "03",
      "eixo": "CSS e acessibilidade",
      "titulo": "Um formulário legível em qualquer tela",
      "subtitulo": "Layout, foco, instruções e navegação pelo teclado",
      "produto": "Versão 2 com layout responsivo e teste de teclado.",
      "objetivos": [
        "Organizar os campos sem prejudicar a ordem de leitura.",
        "Adaptar o layout ao celular e ao computador.",
        "Manter foco visível e instruções compreensíveis."
      ],
      "retomada": "Reaplicar o box model e o CSS Grid apresentados no trabalho anterior. Os campos continuam sendo controles HTML nativos.",
      "conceitos": [
        "Box model",
        "Grid e media query",
        "Foco visível",
        "Rótulos e mensagens"
      ],
      "secoes": [
        {
          "titulo": "A ordem começa no HTML",
          "texto": [
            "Organize os campos em uma sequência que faça sentido antes de criar colunas. A leitura no celular e a ordem da tecla Tab devem acompanhar essa sequência. O CSS pode mudar a aparência, mas não deve tornar a navegação confusa.",
            "Use largura fluida, espaçamento consistente e fonte legível. Evite definir altura fixa para textarea quando isso impedir a leitura."
          ],
          "codigo": "* { box-sizing: border-box; }\ninput, select, textarea, button { font: inherit; }\ninput:not([type=\"radio\"]):not([type=\"checkbox\"]),\nselect, textarea { width: 100%; padding: .7rem; }\n.campo { display: grid; gap: .35rem; }"
        },
        {
          "titulo": "Colunas quando houver espaço",
          "texto": [
            "Comece com uma coluna. Adicione duas colunas em telas maiores e mantenha a descrição ocupando a largura necessária. Teste com a janela estreita e com ampliação de texto, em vez de confiar apenas em uma captura de tela."
          ],
          "codigo": ".campos { display: grid; gap: 1rem; }\n@media (min-width: 48rem) {\n  .campos { grid-template-columns: 1fr 1fr; }\n  .campo-largo { grid-column: 1 / -1; }\n}"
        },
        {
          "titulo": "Pistas que não dependem só da cor",
          "texto": [
            "A borda vermelha, sozinha, não explica um erro. Escreva o que precisa mudar e mantenha a orientação próxima do campo. Não apague o contorno de foco sem oferecer uma alternativa visível.",
            "Navegue com Tab e Shift+Tab, acione os controles pelo teclado e clique nos labels. Confira se textos continuam legíveis e se a página evita rolagem horizontal."
          ],
          "codigo": ":focus-visible {\n  outline: 3px solid #54753a;\n  outline-offset: 3px;\n}\n.ajuda { color: #52634d; font-size: .95rem; }"
        }
      ],
      "atividade": [
        "Aplicar uma identidade visual própria ao formulário existente.",
        "Usar uma coluna no celular e duas onde houver espaço.",
        "Manter a descrição em uma área ampla e os labels próximos dos campos.",
        "Trocar o computador com um colega e testar apenas pelo teclado."
      ],
      "checklist": [
        "O formulário funciona em 360px e em uma tela larga.",
        "A tecla Tab segue uma ordem compreensível.",
        "O foco é visível em links, botões e campos.",
        "As instruções não dependem apenas da cor."
      ],
      "agenda": [
        {
          "minutos": 10,
          "acao": "Leitura dos formulários produzidos e problemas de uso."
        },
        {
          "minutos": 15,
          "acao": "Demonstração de ordem de leitura, largura fluida e foco."
        },
        {
          "minutos": 20,
          "acao": "Construção guiada de uma grade responsiva."
        },
        {
          "minutos": 35,
          "acao": "Aplicação individual do CSS e testes de largura."
        },
        {
          "minutos": 15,
          "acao": "Teste de teclado por pares e correção de uma barreira."
        },
        {
          "minutos": 5,
          "acao": "Registro de uma decisão de acessibilidade."
        }
      ],
      "avaliacao": "Usar evidências de teste, não somente aparência. Cada aluno mostra uma largura pequena e percorre os controles pelo teclado.",
      "curiosidade": "A ordem visual pode mudar com CSS sem mudar a ordem de foco. Isso pode confundir quem navega usando o teclado.",
      "refs": [
        "css",
        "grid",
        "labels",
        "mensagens"
      ],
      "extensao": "Testar o navegador com zoom de 200% e documentar uma melhoria.",
      "apoio": "Fornecer uma grade inicial de uma coluna e construir a media query em conjunto."
    },
    {
      "id": "aula-04",
      "data": "2026-11-06",
      "dataCurta": "06/11",
      "numero": "04",
      "eixo": "JavaScript",
      "titulo": "Os dados aparecem na página",
      "subtitulo": "Evento submit, FormData e resumo da solicitação",
      "produto": "Versão 3 que apresenta um resumo sem recarregar a página.",
      "objetivos": [
        "Tratar o evento submit no formulário.",
        "Ler os valores por meio de FormData e names coerentes.",
        "Atualizar texto no DOM sem interpretar a entrada como HTML."
      ],
      "retomada": "Os eventos de clique e a manipulação do DOM já aparecem no acervo anterior. Agora o evento relevante pertence ao formulário.",
      "conceitos": [
        "submit e preventDefault",
        "FormData.get e getAll",
        "Strings e trim",
        "textContent e feedback"
      ],
      "secoes": [
        {
          "titulo": "O evento pertence ao formulário",
          "texto": [
            "Escute submit no form para contemplar o envio pelo botão e pelo teclado. event.preventDefault() cancela a ação padrão desse envio. Ele não salva os dados e não cria um servidor.",
            "Na simulação, o JavaScript mostra um resumo local. Uma mensagem deve dizer que o chamado não foi enviado a um serviço real."
          ],
          "codigo": "const form = document.querySelector(\"#chamado\");\nconst resumo = document.querySelector(\"#resumo\");\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const dados = new FormData(form);\n  resumo.textContent = `Equipamento: ${dados.get(\"equipamento\")}`;\n});"
        },
        {
          "titulo": "As chaves vêm do name",
          "texto": [
            "new FormData(form) coleta os controles elegíveis. Um campo sem name não aparece como uma entrada com a chave esperada. Checkbox desmarcado e controle disabled não entram normalmente nessa coleta.",
            "Use get para um valor e getAll quando vários controles compartilham o mesmo name, como uma lista de sintomas. Uma string pode receber trim para retirar espaços no começo e no fim."
          ],
          "codigo": "const dados = new FormData(form);\nconst descricao = String(dados.get(\"descricao\") || \"\").trim();\nconst sintomas = dados.getAll(\"sintomas\");\nconsole.log(descricao, sintomas);"
        },
        {
          "titulo": "Um resumo que continua sendo texto",
          "texto": [
            "Use textContent para exibir os valores digitados. Assim, uma entrada parecida com uma tag aparece como texto. Evite construir HTML diretamente com o conteúdo preenchido pelo visitante.",
            "Uma região de status pode avisar que o resumo mudou. O teste precisa verificar o conteúdo exibido, o caminho pelo teclado e a ausência de erros no console."
          ],
          "codigo": "<p id=\"resumo\" role=\"status\" aria-live=\"polite\"></p>"
        }
      ],
      "atividade": [
        "Escutar submit com addEventListener no form.",
        "Coletar equipamento, categoria, prioridade e descrição.",
        "Mostrar um resumo com textContent e aviso de simulação.",
        "Testar envio pelo botão e pela tecla Enter em um campo apropriado."
      ],
      "checklist": [
        "O envio não recarrega a página na simulação.",
        "FormData encontra os names definidos no HTML.",
        "Os checkbox usam getAll quando necessário.",
        "O resumo apresenta os dados como texto e informa a simulação."
      ],
      "agenda": [
        {
          "minutos": 10,
          "acao": "Retomada de seletores e eventos conforme o diagnóstico."
        },
        {
          "minutos": 20,
          "acao": "Demonstração do evento submit e da ação padrão."
        },
        {
          "minutos": 20,
          "acao": "Leitura guiada dos campos com FormData."
        },
        {
          "minutos": 30,
          "acao": "Implementação individual do resumo no DOM."
        },
        {
          "minutos": 15,
          "acao": "Testes pelo botão, teclado e console."
        },
        {
          "minutos": 5,
          "acao": "Explicação individual do papel de preventDefault."
        }
      ],
      "avaliacao": "Solicitar uma explicação sobre evento, coleta e atualização. Confirmar que o aluno distingue leitura local de envio a servidor.",
      "curiosidade": "Um campo pode ter id e aparecer na tela, mas não ser coletado pela chave esperada quando falta name.",
      "refs": [
        "submit",
        "formdata",
        "disabled",
        "textcontent"
      ],
      "extensao": "Acrescentar um contador de caracteres com evento input, mantendo a regra minlength no HTML.",
      "apoio": "Mostrar no console apenas um campo antes de construir o resumo completo."
    },
    {
      "id": "aula-05",
      "data": "2026-11-13",
      "dataCurta": "13/11",
      "numero": "05",
      "eixo": "Validação",
      "titulo": "Mensagens que ajudam a corrigir",
      "subtitulo": "Regras complementares, erros e casos de teste",
      "produto": "Versão 4 com uma regra de confirmação de contato e mensagens claras.",
      "objetivos": [
        "Distinguir restrição HTML e regra complementar em JavaScript.",
        "Limpar uma mensagem personalizada quando o valor muda.",
        "Testar entradas válidas, inválidas e limites."
      ],
      "retomada": "Retomar required, minlength e type=email. A regra nova compara dois campos, sem substituir as regras que o HTML já oferece.",
      "conceitos": [
        "checkValidity e reportValidity",
        "setCustomValidity",
        "Evento input",
        "Casos de teste"
      ],
      "secoes": [
        {
          "titulo": "Uma regra que compara dois campos",
          "texto": [
            "Acrescente um campo para repetir o contato fictício. A confirmação deve coincidir com o primeiro contato. Deixe a regra explícita e apresente a ajuda antes da tentativa de envio.",
            "O exemplo trabalha uma comparação simples de strings. A atividade usa dados fictícios, sem senhas ou documentos pessoais. A validação do navegador ajuda o preenchimento, mas um sistema real também verifica os dados no servidor."
          ],
          "codigo": ""
        },
        {
          "titulo": "Mensagem personalizada precisa ser limpa",
          "texto": [
            "setCustomValidity recebe uma mensagem quando o valor não atende à regra. Uma string vazia limpa o erro personalizado. Atualize a regra quando qualquer um dos dois contatos mudar para não manter um erro antigo.",
            "A validação nativa pode impedir o evento submit quando há um campo inválido. Por isso, preparar e atualizar a regra no evento input evita depender apenas do submit."
          ],
          "codigo": "const contato = document.querySelector(\"#contato\");\nconst confirmar = document.querySelector(\"#confirmar\");\nfunction conferirContato() {\n  const diferente = confirmar.value.trim() !== contato.value.trim();\n  confirmar.setCustomValidity(diferente ? \"Repita o mesmo contato.\" : \"\");\n}\ncontato.addEventListener(\"input\", conferirContato);\nconfirmar.addEventListener(\"input\", conferirContato);"
        },
        {
          "titulo": "Teste a regra e a recuperação",
          "texto": [
            "Verifique campo vazio, formato inválido, valores diferentes e correção depois de uma falha. O formulário deve permitir nova tentativa sem exigir que a pessoa reescreva os campos corretos.",
            "Registre entrada, resultado esperado, resultado observado e ajuste realizado. Uma descrição de erro deve explicar o próximo passo, e não apenas dizer “inválido”."
          ],
          "codigo": "if (!form.reportValidity()) {\n  return;\n}\n// Depois de validar, gerar o resumo local."
        }
      ],
      "atividade": [
        "Criar a confirmação do contato fictício com label e name.",
        "Comparar os campos e limpar o erro personalizado após a correção.",
        "Exibir uma orientação legível junto ao campo.",
        "Registrar pelo menos quatro testes, incluindo a recuperação do erro."
      ],
      "checklist": [
        "As restrições HTML continuam funcionando.",
        "A regra de comparação atualiza quando os valores mudam.",
        "O erro desaparece depois da correção.",
        "Meus testes incluem ao menos um caso inválido e sua recuperação."
      ],
      "agenda": [
        {
          "minutos": 10,
          "acao": "Revisão das restrições e coleta das dificuldades."
        },
        {
          "minutos": 20,
          "acao": "Leitura de mensagens de erro e escolha da regra complementar."
        },
        {
          "minutos": 20,
          "acao": "Demonstração de input e setCustomValidity."
        },
        {
          "minutos": 30,
          "acao": "Implementação individual e criação dos casos de teste."
        },
        {
          "minutos": 15,
          "acao": "Teste por um colega e correção da recuperação do erro."
        },
        {
          "minutos": 5,
          "acao": "Registro da diferença entre validação e segurança."
        }
      ],
      "avaliacao": "Conferir a recuperação do erro e a explicação da regra. Evitar avaliar apenas se uma única entrada válida funcionou.",
      "curiosidade": "Uma mensagem personalizada não vazia mantém o controle inválido. Alterar o texto do campo, sozinho, não apaga a mensagem definida pelo código.",
      "refs": [
        "validacao",
        "custom",
        "mensagens",
        "submit"
      ],
      "extensao": "Relacionar uma mensagem própria ao campo por aria-describedby e testar sua clareza com um colega.",
      "apoio": "Aplicar a regra primeiro a dois campos simples, com valores visíveis no console."
    },
    {
      "id": "aula-06",
      "data": "2026-11-27",
      "dataCurta": "27/11",
      "numero": "06",
      "eixo": "Web e projeto",
      "titulo": "O caminho dos dados",
      "subtitulo": "GET, POST, HTTPS e definição do projeto integrador",
      "produto": "Especificação curta do projeto e mapa do percurso dos dados.",
      "objetivos": [
        "Explicar cliente, requisição e servidor em linguagem simples.",
        "Distinguir parâmetros de GET e corpo de POST.",
        "Definir o que o protótipo local faz e o que exigiria backend."
      ],
      "retomada": "Não haverá aula em 20/11. Reabrir a versão anterior e conferir o resumo antes de apresentar conceitos novos.",
      "conceitos": [
        "Cliente e servidor",
        "action e method",
        "GET, POST e HTTPS",
        "Requisitos do projeto"
      ],
      "secoes": [
        {
          "titulo": "Uma requisição precisa de destino",
          "texto": [
            "O navegador pode enviar um formulário a uma URL indicada por action. method define como essa requisição se organiza. Em GET, os campos enviados aparecem normalmente na consulta da URL. Em POST, os dados ficam no corpo da requisição.",
            "POST não significa criptografia. HTTPS protege o tráfego entre os pontos da conexão. Um serviço real precisa receber, validar e tratar os dados."
          ],
          "codigo": "<!-- Exemplo conceitual: esta rota não existe no WebLab. -->\n<form action=\"/api/chamados\" method=\"post\">\n  <!-- controles com name -->\n</form>"
        },
        {
          "titulo": "O limite do protótipo está explícito",
          "texto": [
            "GitHub Pages hospeda conteúdo estático. O nosso projeto usa HTML, CSS e JavaScript no navegador e simula o envio. Publicar esses arquivos não cria automaticamente uma API, um banco de dados ou uma caixa de chamados.",
            "Um backend futuro receberia a requisição, faria novas validações, aplicaria regras e retornaria uma resposta. Esse desenvolvimento fica fora das 15 horas deste percurso."
          ],
          "codigo": ""
        },
        {
          "titulo": "Requisitos do projeto integrador",
          "texto": [
            "O produto final será um formulário de suporte para um laboratório fictício. Ele deve organizar campos, orientar o preenchimento, validar entradas e mostrar um resumo local acessível.",
            "Defina uma categoria de problema que abra um campo complementar, como “outro”. Escreva seus casos de teste e as partes que cada aluno consegue explicar, mesmo quando houver colaboração."
          ],
          "codigo": ""
        }
      ],
      "atividade": [
        "Desenhar o percurso do preenchimento ao resumo local.",
        "Marcar no mapa onde entraria um servidor real.",
        "Escrever os requisitos do projeto integrador e os campos necessários.",
        "Escolher seis casos de teste e planejar as melhorias restantes."
      ],
      "checklist": [
        "Expliquei uma diferença entre GET e POST.",
        "Reconheci que POST sozinho não cifra dados.",
        "Meu projeto declara envio simulado.",
        "Os requisitos descrevem comportamentos que consigo testar."
      ],
      "agenda": [
        {
          "minutos": 15,
          "acao": "Retomada prática após o intervalo sem aula."
        },
        {
          "minutos": 20,
          "acao": "Discussão do percurso dos dados, GET, POST e HTTPS."
        },
        {
          "minutos": 15,
          "acao": "Mapa em papel e identificação dos limites do protótipo."
        },
        {
          "minutos": 15,
          "acao": "Apresentação dos requisitos e rubrica sugerida do projeto."
        },
        {
          "minutos": 25,
          "acao": "Planejamento individual e início das melhorias."
        },
        {
          "minutos": 10,
          "acao": "Conferência de viabilidade e próximos passos."
        }
      ],
      "avaliacao": "Ler o mapa e os requisitos. O aluno deve distinguir o resumo local de um recebimento real em servidor.",
      "curiosidade": "Um endereço com parâmetros de busca pode ser compartilhado como link. Esse é um uso comum de GET em pesquisas.",
      "refs": [
        "envio",
        "pages",
        "primeiro"
      ],
      "extensao": "Inspecionar uma requisição de busca pública nas ferramentas do navegador, sem enviar dados pessoais.",
      "apoio": "Usar cartões com “navegador”, “requisição”, “servidor” e “resposta” para organizar o mapa."
    },
    {
      "id": "aula-07",
      "data": "2026-12-04",
      "dataCurta": "04/12",
      "numero": "07",
      "eixo": "Integração",
      "titulo": "Um formulário que reage ao contexto",
      "subtitulo": "Campos condicionais e organização do código",
      "produto": "Versão integradora com campo complementar condicional.",
      "objetivos": [
        "Mostrar um campo quando a escolha exige mais detalhes.",
        "Manter hidden, disabled e required coerentes.",
        "Organizar a lógica em funções pequenas e explicáveis."
      ],
      "retomada": "Reaplicar alternância de estado e DOM, presentes nos exemplos anteriores de cards e detalhes.",
      "conceitos": [
        "Evento change",
        "hidden e disabled",
        "required condicional",
        "Funções e manutenção"
      ],
      "secoes": [
        {
          "titulo": "A pergunta seguinte depende da resposta",
          "texto": [
            "Quando a categoria for “outro”, o formulário pede uma explicação adicional. Quando a categoria mudar, o campo complementar deve deixar de ser obrigatório e não participar da coleta.",
            "Esconder um elemento não significa desabilitar o controle. Ajuste o estado de forma explícita. Depois de voltar a “outro”, o controle deve funcionar novamente."
          ],
          "codigo": "function atualizarOutro() {\n  const ativo = categoria.value === \"outro\";\n  blocoOutro.hidden = !ativo;\n  outro.disabled = !ativo;\n  outro.required = ativo;\n  if (!ativo) outro.value = \"\";\n}\ncategoria.addEventListener(\"change\", atualizarOutro);\natualizarOutro();"
        },
        {
          "titulo": "Funções com uma responsabilidade",
          "texto": [
            "Separe atualizarOutro, conferirContato e gerarResumo. Dê nomes que indiquem o que cada função faz. Isso torna mais simples localizar erros e explicar uma alteração durante a apresentação.",
            "Ao oferecer uma ação para começar um novo chamado, limpe também o resumo e os erros personalizados. Evite apagar o trabalho em andamento por meio de um botão de reset pouco claro."
          ],
          "codigo": ""
        },
        {
          "titulo": "Integração se verifica com mudanças de estado",
          "texto": [
            "Teste “outro”, preencha detalhes, volte a uma categoria comum e gere o resumo. Depois reabra “outro” e confirme se a regra continua adequada.",
            "Confira novamente o layout e o teclado. Um comportamento novo pode criar uma barreira de uso em algo que já funcionava."
          ],
          "codigo": ""
        }
      ],
      "atividade": [
        "Implementar a categoria “outro” e seu campo complementar.",
        "Atualizar hidden, disabled e required juntos.",
        "Organizar o script em funções pequenas.",
        "Executar os casos de ida, volta e novo preenchimento."
      ],
      "checklist": [
        "O campo aparece apenas quando necessário.",
        "Um campo desativado não bloqueia o envio.",
        "A coleta reflete o estado atual do formulário.",
        "Consigo explicar cada função do meu script."
      ],
      "agenda": [
        {
          "minutos": 10,
          "acao": "Reabertura dos requisitos e da última versão estável."
        },
        {
          "minutos": 20,
          "acao": "Demonstração de campo condicional e estados coerentes."
        },
        {
          "minutos": 40,
          "acao": "Desenvolvimento individual do projeto integrador."
        },
        {
          "minutos": 15,
          "acao": "Testes de transição de estado e correções."
        },
        {
          "minutos": 10,
          "acao": "Conferência da organização de funções e nomes."
        },
        {
          "minutos": 5,
          "acao": "Registro de uma melhoria e de uma dúvida."
        }
      ],
      "avaliacao": "Solicitar duas mudanças de categoria e a explicação das propriedades alteradas. Verificar o estado do campo, não só sua aparência.",
      "curiosidade": "Um campo com hidden no bloco pode continuar existindo no DOM. Um controle disabled normalmente fica fora de FormData.",
      "refs": [
        "disabled",
        "formdata",
        "submit"
      ],
      "extensao": "Criar uma função que gere cada linha do resumo com createElement e textContent.",
      "apoio": "Testar primeiro a mudança visual. Depois acrescentar disabled e required, observando a diferença."
    },
    {
      "id": "aula-08",
      "data": "2026-12-11",
      "dataCurta": "11/12",
      "numero": "08",
      "eixo": "Testes e publicação",
      "titulo": "O projeto nas mãos de outra pessoa",
      "subtitulo": "Revisão por pares, correções e publicação no GitHub Pages",
      "produto": "Projeto revisado, publicado e acompanhado de registro de testes.",
      "objetivos": [
        "Executar casos de teste com entradas e resultados esperados.",
        "Corrigir problemas com base em evidências.",
        "Publicar e repetir os testes no endereço público."
      ],
      "retomada": "A publicação já aparece na trilha anterior. O foco agora é verificar o comportamento no endereço publicado e documentar o projeto.",
      "conceitos": [
        "Casos válidos e inválidos",
        "Teste de teclado e tela",
        "Caminhos relativos",
        "README e publicação"
      ],
      "secoes": [
        {
          "titulo": "Teste é uma pergunta verificável",
          "texto": [
            "Um caso descreve entrada, ação e resultado esperado. Inclua formulário vazio, formato de contato inadequado, contatos diferentes, descrição no limite, categoria “outro” e envio válido.",
            "O colega registra o que observou e o autor tenta reproduzir o problema. Se houver uma correção, execute novamente os testes afetados. Não use dados privados de pessoas reais."
          ],
          "codigo": ""
        },
        {
          "titulo": "A publicação tem uma pasta de origem",
          "texto": [
            "Organize index.html, CSS, JavaScript e demais arquivos com caminhos relativos. Verifique letras maiúsculas e minúsculas nos nomes. Escreva no README como abrir e testar o projeto.",
            "No GitHub Pages, selecione a origem de publicação disponível na sua conta e confira o resultado do processamento. Depois abra o endereço público e repita os testes principais."
          ],
          "codigo": ""
        },
        {
          "titulo": "Revisão técnica e explicação individual",
          "texto": [
            "Dê prioridade a funções quebradas e barreiras de uso antes de efeitos visuais adicionais. A apresentação final deve mostrar uma entrada válida, um erro e sua recuperação.",
            "Cada aluno prepara uma explicação sobre HTML, uma regra CSS e uma parte do JavaScript. Quem trabalhar com ajuda continua responsável por explicar o próprio código."
          ],
          "codigo": ""
        }
      ],
      "atividade": [
        "Trocar o computador com um colega e executar seis casos de teste.",
        "Registrar dois problemas ou oportunidades de melhoria.",
        "Corrigir o que for necessário e repetir os casos afetados.",
        "Publicar, conferir os links e preparar a demonstração final."
      ],
      "checklist": [
        "Meus testes têm resultado esperado e observado.",
        "A navegação por teclado e o celular foram conferidos.",
        "A página pública carrega os arquivos corretamente.",
        "O README informa o caráter simulado do projeto."
      ],
      "agenda": [
        {
          "minutos": 10,
          "acao": "Apresentação da matriz de testes e das prioridades."
        },
        {
          "minutos": 25,
          "acao": "Teste individual do projeto de um colega."
        },
        {
          "minutos": 25,
          "acao": "Correções e repetição dos testes afetados."
        },
        {
          "minutos": 25,
          "acao": "Organização do repositório e publicação."
        },
        {
          "minutos": 10,
          "acao": "Teste no endereço público e preparação da fala."
        },
        {
          "minutos": 5,
          "acao": "Registro de pendências para o fechamento."
        }
      ],
      "avaliacao": "Conferir o registro e uma correção reproduzível. Não reduzir a avaliação à existência de um endereço publicado.",
      "curiosidade": "Um caminho que funciona no computador pode falhar na hospedagem se o nome do arquivo tiver letras maiúsculas e minúsculas diferentes.",
      "refs": [
        "publicar",
        "pages",
        "mensagens"
      ],
      "extensao": "Escrever no README uma limitação conhecida e uma melhoria futura viável.",
      "apoio": "Usar um repositório de exemplo para mostrar a raiz de publicação, sem fazer a entrega no lugar do aluno."
    },
    {
      "id": "aula-09",
      "data": "2026-12-18",
      "dataCurta": "18/12",
      "numero": "09",
      "eixo": "Síntese",
      "titulo": "O que conseguimos construir e explicar",
      "subtitulo": "Demonstração, reavaliação e continuidade",
      "produto": "Projeto final, explicação individual e comparação com o diagnóstico inicial.",
      "objetivos": [
        "Demonstrar o formulário e justificar decisões técnicas.",
        "Realizar uma pequena alteração com autonomia.",
        "Comparar a aprendizagem atual com a evidência de outubro."
      ],
      "retomada": "Reabrir as respostas de 16/10 somente depois da nova tentativa individual, para observar a evolução sem copiar o raciocínio anterior.",
      "conceitos": [
        "Apresentação técnica",
        "Explicação individual",
        "Reavaliação",
        "Próximos passos"
      ],
      "secoes": [
        {
          "titulo": "Demonstração com evidência",
          "texto": [
            "Apresente o objetivo do formulário, preencha um caso válido e mostre o resumo. Em seguida, provoque um erro e demonstre a recuperação. Explique que o envio é simulado.",
            "Mostre uma decisão de HTML e acessibilidade, uma de layout e uma de JavaScript. A fala deve acompanhar o código e o comportamento observado."
          ],
          "codigo": ""
        },
        {
          "titulo": "Uma alteração pequena, feita por você",
          "texto": [
            "Exemplos: acrescentar uma opção de categoria, mudar uma restrição com justificativa, alterar um texto do resumo ou ajustar um ponto de quebra. O professor escolhe uma mudança adequada ao trabalho e pede que o aluno teste o resultado.",
            "A alteração ajuda a verificar compreensão. Não é uma corrida de digitação, e o professor pode oferecer uma pista registrada quando necessário."
          ],
          "codigo": ""
        },
        {
          "titulo": "Comparação e continuidade",
          "texto": [
            "Responda a uma nova versão curta das questões de HTML, CSS e JavaScript. Compare o que você explica agora com a primeira tentativa e registre uma evidência concreta de avanço.",
            "O próximo percurso pode incluir requisições com fetch, API e backend com validação no servidor. Esses temas dependem da consolidação da base e ficam como continuidade, sem prometer que o protótipo atual já faz isso."
          ],
          "codigo": ""
        }
      ],
      "atividade": [
        "Demonstrar envio válido, erro e recuperação.",
        "Explicar decisões de HTML, CSS e JavaScript.",
        "Fazer uma pequena alteração individual e testá-la.",
        "Registrar o que aprendeu e uma pergunta para continuar estudando."
      ],
      "checklist": [
        "Demonstrei o formulário em vez de apenas mostrar a tela.",
        "Expliquei uma regra e seu efeito no código.",
        "Testei a alteração individual.",
        "Comparei minha aprendizagem com a evidência inicial."
      ],
      "agenda": [
        {
          "minutos": 10,
          "acao": "Organização e nova tentativa curta do diagnóstico."
        },
        {
          "minutos": 15,
          "acao": "Demonstração do formato de apresentação e critérios."
        },
        {
          "minutos": 40,
          "acao": "Mostra em rodadas com visitas do professor às estações."
        },
        {
          "minutos": 20,
          "acao": "Alteração individual e explicação técnica nas estações."
        },
        {
          "minutos": 10,
          "acao": "Comparação das evidências e devolutiva."
        },
        {
          "minutos": 5,
          "acao": "Fechamento e organização do portfólio."
        }
      ],
      "avaliacao": "Usar rubrica sugerida e evidência individual. Ajustar número e duração das rodadas ao tamanho da turma, que ainda não foi informado.",
      "curiosidade": "Explicar uma alteração pequena costuma revelar se compreendemos a relação entre seletor, evento e resultado na página.",
      "refs": [
        "primeiro",
        "formdata",
        "validacao",
        "pages"
      ],
      "extensao": "Desenhar a API de uma versão futura, descrevendo os dados enviados e a resposta esperada.",
      "apoio": "Permitir explicação acompanhada do código e perguntas curtas sobre uma parte por vez."
    }
  ]
};
