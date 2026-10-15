# WebLab - Prof. Fabrício Rodrigues

Programação Web para o Curso Técnico em Informática.

## Período de 16/10 a 18/12/2026

9 encontros às sextas-feiras, com 100 minutos cada. 18 aulas de 50 minutos,
equivalentes a 15 horas de relógio. Sem aula em 20/11.

O percurso retoma a base de HTML, CSS e JavaScript e desenvolve um formulário
de chamado de suporte ao laboratório com envio simulado.

- `index.html`: página inicial, calendário e mapas.
- `curso-dados.js`: conteúdo dos encontros, referências e questões públicas.
- `curso.js`: páginas de aula e ficha de diagnóstico.
- `curso.css`: aparência do percurso.
- `aulas.html?id=aula-01`: roteiro de cada encontro.
- `diagnostico.html`: ficha que exporta respostas localmente em TXT.
- `materiais/`: PDFs, bases e pacote offline para estudantes.
- `pratica/formulario-modelo.html`: modelo local com validação e resumo.
- `revisao.html`: atividades de revisão da base.

O gabarito e as notas do professor ficam fora deste repositório e do pacote dos
alunos. O diagnóstico orienta a retomada e não recebe nota somativa.

## Uso offline

Baixe `materiais/WebLab-Aluno-Offline.zip`, extraia e abra `index.html`.
O pacote contém também as bases extraídas em `pratica/diagnostico-base` e
`pratica/formulario-base`. Elas são cópias de trabalho ignoradas pelo Git neste
checkout; os ZIPs públicos preservam seus arquivos.

Os links externos das referências precisam de conexão. A ficha digital não
salva automaticamente nem envia respostas ao professor.

## Publicação

GitHub Pages publica a branch `main`, na pasta raiz. Os caminhos são relativos.
O site é estático e não oferece backend, banco ou autenticação de chamados.

[Acessar o WebLab](https://fabricio-rodrigues-ifpa.github.io/programacao-web/)
