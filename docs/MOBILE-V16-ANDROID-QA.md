# V16 — Mobile Experience · Android / Galaxy S23 FE

## Razão da correção
O método estava programado para `compact.matches` (largura até 760 CSS px) ativar o modo `is-static` e empilhar os cinco capítulos verticalmente. Isso fazia o carrossel desaparecer. Além disso, o Hero acumulava alturas mínimas de mais de 1.000 px, painéis com `overflow:hidden`, grafos de posicionamento absoluto e mockups com fontes abaixo de 10 px.

## Escopo

| Área | Mudança mobile (≤760 CSS px) | Desktop |
|---|---|---|
| Cabeçalho | PT/EN + menu em grade com alvos de toque | Inalterado |
| Hero | Conteúdo antes da constelação, dimensões fluidas sem escala artificial | Inalterado |
| Cena do problema | Painel menos comprimido, mensagens mais legíveis; fallback para aparelhos baixos | Inalterado |
| Grafo | Espaço dedicado para nós e painel de explicações com rolagem local | Inalterado |
| Método | Cinco slides horizontais por swipe nativo; snap e botões 01–05; transição sutil de entrada | Scroll cinematográfico horizontal original |
| Mockups | Legibilidade e alturas flexíveis para evitar recorte | Inalterado |
| Organograma | Cards empilhados em 520 CSS px ou menos | Inalterado |
| Maturidade | Cinco etapas legíveis em vez de cinco colunas com texto de 7 px | Inalterado |
| Diagnóstico | Texto e alvos de toque ligeiramente maiores | Algoritmo intacto |

A experiência horizontal no Android utiliza `overflow-x:auto`, `scroll-snap-type:x mandatory` e `scrollLeft` sem biblioteca adicional, sem interceptar eventos de toque, e sem aprisionar o scroll vertical da página.

## Arquitetura reversível

- `mobile-v16.css` contém **apenas** media queries `max-width:760px` (e variações de altura/movimento reduzido).
- As quatro páginas carregam o CSS novo após os estilos originais, sem alterar CSS anterior.
- Somente `index.html` e `index-en.html` têm uma pequena mudança no controlador do carrossel para distinguir mobile, desktop normal e desktop de baixa altura.
- `diagnostico.html` e `diagnostico-en.html` mantêm o JavaScript **byte a byte idêntico** ao publicado.
- Todo DOM original preservado; só acrescentado `role`, `aria-roledescription`, `aria-label` e `tabindex` ao viewport do carrossel.
- Nenhuma mudança na copy, pontuação, identidade visual ou fontes.

## Verificações automáticas executadas

- Sintaxe JS válida nas quatro páginas.
- Mesmo DOM, classes estruturais, IDs e âncoras.
- Mesmo CSS original PT/EN antes do novo arquivo mobile.
- Diagnósticos: JS idêntico; algoritmo inalterado.
- Simulação isolada do controlador:
  - Swipe do slide 01 ao 05 altera contador e progresso.
  - Botões numerados selecionam o slide correspondente sem pular verticalmente pela página.
  - Mobile mantém os slides também com tela curta ou movimento reduzido.
  - Desktop mantém `translate3d` por scroll; fallback de desktop baixo permanece.
- CSS de suporte com blocos equilibrados e sem regras fora de media queries.

## Validação visual obrigatória antes de publicar

1. Android Galaxy S23 FE, Chrome, orientação vertical e horizontal, zoom padrão.
2. Emular dimensões **360×780, 390×844, 412×915, 430×932** CSS px e verificar `document.documentElement.scrollWidth <= window.innerWidth`.
3. Inspecionar as oito seções em PT e EN, especialmente Hero, três cenas do problema, 7 dimensões do grafo, 5 mockups, organograma e maturidade.
4. Verificar swipe (01→05 e 05→01), botões, indicador e scroll normal ao sair do carrossel.
5. Testar redução de movimento, aumento do tamanho do texto no Android, menu aberto/fechado e alternância PT/EN.
6. Completar diagnóstico (PT e EN), imprimir PDF e rever quebra de textos do radar.
7. Validar que o desktop nas larguras 1024, 1440 e 1920 px permanece visual e funcionalmente igual.
8. Conferir cache/caminhos de `mobile-v16.css` na hospedagem oficial.

**Não há afirmação de validação física no S23 FE.** O código está em uma branch isolada para revisão e eventual publicação após QA visual.
