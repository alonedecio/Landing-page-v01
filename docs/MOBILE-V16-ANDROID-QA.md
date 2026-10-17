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


## V17 — Refinamento guiado pelas capturas do Galaxy S23 FE

Correções pedidas pelo usuário após testar a V16 em dispositivo real:

- **Hero:** esconder apenas o grafo ilustrativo `.hero > .art-graph` e remover a altura reservada para ele. Conteúdo/CTA permanecem.
- **Quadro 2:** mostrar somente a mensagem da cena ativa dentro da janela, mantendo os três botões e o scroll narrativo; painel cresce de acordo com o conteúdo, evitando cortar o texto do cliente. Transformar os cinco círculos de conhecimento em chips legíveis, sem quebra de palavras nem posições absolutas no mobile.
- **Mapa interativo:** o código passa a detectar a largura mobile para colocar o AGENTE no centro de uma órbita de sete dimensões; o mesmo código mantém a geometria desktop antiga. Ao selecionar uma dimensão, a lista dos subitens aparece no painel de detalhes, sem sobrepor novos nós ao desenho pequeno.
- **Organograma:** preservar um líder, dois gestores e três tipos de time como três níveis de uma árvore, com conectores alinhados e três caixas compactas na base. Descrições secundárias ficam visualmente ocultas, mas disponíveis à acessibilidade.
- **Fechamento:** reduzir tipografia e equilibrar largura/linha, sem alterar o texto editorial.
- **Cache:** as landing pages solicitam `mobile-v16.css?v=17` para evitar utilizar o CSS anterior guardado no navegador após implantação.

**Escopo de código:** editar o CSS mobile existente no lugar (sem criar uma nova camada de overrides), ajustar somente o ramo de cálculo do grafo em `index.html` e `index-en.html`. `diagnostico.html` e `diagnostico-en.html` não são modificados.

**Verificações concluídas:** scripts sintaticamente válidos, IDs/âncoras/estrutura e CSS inline preservados, geometria radial simulada para larguras mobile e confirmação de que o caminho desktop mantém seus cálculos e nós terciários. O carrossel V16 permanece inalterado.

**Pendente:** validação visual no S23 FE, especialmente transição das três cenas, órbita completa e organograma nas larguras 360/390/412/430px, inclinação horizontal, PT/EN e Android Chrome. Não considerar as capturas originais como teste da V17.


## V18 — Motion por scroll, revelação progressiva e conversão mobile

**Escopo:** landing PT e EN, só em mobile. Sem mudança da copy, do DOM, do desktop ou dos arquivos do diagnóstico.

- **Quadro 2:** foi removida a regra que mostrava todos os chips ao mesmo tempo. As classes existentes `data-reveal` foram mantidas: cena 0 exibe apenas Dados, cena 1 acrescenta Procedimentos e Políticas, e cena 2 acrescenta Decisões e Experiência. Há transição breve com opção de movimento reduzido respeitada. O controlador de cena original do desktop não foi alterado.
- **Método:** o HTML e os 5 cards permanecem. Em dispositivos `max-width:760px`, com `min-height:741px` e sem preferência de movimento reduzido, a página passa a ter uma jornada vertical de cinco alturas de tela; o palco permanece sticky e o deslocamento vertical controla a translação horizontal dos slides, a barra e o índice. Botões 01–05 e gesto lateral continuam selecionando etapas.
- **Fallback:** telas mais baixas, `prefers-reduced-motion: reduce` e ambientes sem JavaScript seguem com o carrossel horizontal nativo e o `scroll-snap` da V16. O modo de scroll exige `html.mobile-scroll-ready`, aplicado somente pelo controlador inicializado.
- **Compatibilidade:** a folha original de mobile possuía `transform:none!important`. Uma regra específica de scroll mode usa `transform:translate3d(var(--mobile-track-x),0,0)!important`; o JavaScript atualiza somente essa variável. O desktop não recebe a classe nem esse estilo.
- **Mockups:** desenhos simplificados somente no mobile, mostrando os elementos essenciais. O conteúdo e as interfaces completas continuam disponíveis no desktop.
- **CTA de diagnóstico na landing:** somente a ordem visual do painel muda no mobile: pergunta, explicação, botão, detalhes, separador e, por último, a lista de maturidade. Os links e o `diagnostico.html` em si permanecem inalterados.
- **Quadros seguintes:** redução moderada de espaçamentos verticais, sem ocultação de argumentos comerciais.

### QA de aceite V18 (ainda requer teste real)

1. S23 FE / Chrome: ir ao Quadro 2; conferir 1 → 3 → 5 chips conforme o scroll e conforme as abas, nos dois idiomas.
2. Método em Android alto: rolar a página até e através do carrossel, acompanhar cinco capítulos sem cards cortados, testar 01–05 e swipe para avançar/voltar; continuar rolando até as equipes sem ficar preso.
3. Método no modo paisagem / alturas até 740px: confirmar fallback horizontal por swipe, sem sticky ou bloqueio de scroll vertical.
4. Desativar animações no Android e conferir o carrossel em swipe sem movimento forçado.
5. Diagnóstico na landing: validar o título PERGUNTA + CTA antes da escala 01–05; clicar e confirmar rota PT/EN.
6. Conferir mockups legíveis e quebra de títulos no S23 FE, 360px, 390px, 412px, 430px.
7. Conferir desktop 1024/1440/1920px: todo CSS de V18 está dentro de media queries até 760px; script do desktop continua pelo mesmo ramo anterior.

**Não declarar QA visual concluído antes da inspeção em navegador real.**
