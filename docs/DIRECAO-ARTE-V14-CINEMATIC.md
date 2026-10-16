# V14 — Direção de arte: Galactic Cyberpunk Editorial

## Decisão criativa

A identidade visual combina **profundidade espacial**, **tecnologia editorial sofisticada** e **interfaces corporativas verificáveis**. O objetivo é ampliar o impacto cinematográfico da landing sem cair em neon excessivo, glitch permanente, clichês sci-fi ou superfícies ilegíveis.

A ZexIA é referência de **encenação comercial, ritmo narrativo, contraste de letras e concretude das interfaces**. Não copiamos seus assets ou código proprietário, não alegamos ter identificado sua família tipográfica exata e não replicamos sua narrativa. O usuário pediu para preservar o valor, a arquitetura e o texto do Conhecimento/Vivo.

### Repertório externo selecionado

| Fonte | Princípio extraído | Licença/observação |
|---|---|---|
| https://zexia.ai/ | História encenada, grandes títulos, interfaces e progressão | Inspiração; não reutilizar material proprietário |
| https://github.com/codrops/ScrollTextMotion | Revelações de títulos e ritmo editorial por scroll | MIT; aqui recriamos comportamento simples com APIs nativas |
| https://github.com/codrops/OnScrollLayoutFormations | Organização visual que emerge da rolagem | MIT; nesta rodada apenas luz nos nós já existentes |
| https://github.com/codrops/3DCarousel | Perspectiva espacial e composição tridimensional | MIT; aqui apenas tilt local de baixa intensidade |
| https://github.com/codrops/SlideshowAnimations | Timings e tratamento de cenas | MIT; não importamos slides nem trocamos o carrossel atual |
| https://vercel.com/design/guidelines | Luz ambiente + direta, bordas nítidas, sombras em camadas | Referência de diretrizes |
| https://github.com/google/fonts/tree/main/ofl/instrumentserif | Fonte Instrument Serif normal/italic | SIL OFL |

Os exemplos do Codrops são bibliografia técnica. **Nenhum trecho de código externo foi copiado nesta fase.** O experimento usa apenas CSS e JS nativos.

## Gramática visual

### Fontes
- **Syne**: títulos estruturais, tecnologia, precisão.
- **Instrument Serif Italic**: palavras ou frases curtas com maior densidade emocional.
- **Inter**: corpo do texto para leitura contínua.
- **IBM Plex Mono**: índices, rotas, sinais operacionais, mockups.
- Alternâncias tipográficas aplicadas sobretudo aos elementos `em` já existentes, sem alterar o HTML de cada título.
- Não aplicar Instrument Serif no corpo das respostas do diagnóstico.

### Cores
- Cosmos `#080D1A`: fundo espacial principal.
- Mint `#B9FFCF`: identidade e ação.
- Orbit `#A9A7FF`: contraste intelectual / noção de profundidade.
- Pulse `#F2A6C8`: apenas detalhes de espectro da luz.
- Paper `#EAF0ED`: blocos de leitura, transparência e confiança.

Usar **80% identidade base, 15% cor violeta, 5% rosa** como orientação estética, não fórmula rígida.

## Mapa narrativo da V14

| Quadro | Ação cinematográfica | Regras |
|---|---|---|
| 1 · Hero | Camadas de estrelas CSS, nébula suave, fonte serifada contrastante, halo do grafo que responde ao cursor | Texto e CTA no plano frontal; grafo não bloqueia leitura |
| 2 · Conhecimento disperso | Sombra de cena, realce do cartão relevante em cada estado do scroll; serifada na quebra de ideia | Preservar três cenas, labels e timings originais |
| 3 · Agente | Campo de estrelas pontual, acentuação violeta nos nós, foco luminoso na capacidade selecionada | Não alterar posicionamento das ramificações |
| 4 · Método | Fundo galáctico editorial, iluminação dos 5 mockups, tilt 3D local leve sob mouse | Não mexer no translate3d do track |
| 5 · Times | Grafo hierárquico com luz controlada, destaque na equipe híbrida | Não redesenhar conexões nem criar linhas duplicadas |
| 6 · Gestão | Frase de impacto em serif e hover contido nos pilares | Priorizar confiança e legibilidade |
| 7 · Diagnóstico | Painel escuro com profundidade e degraus acentuados | CTA deve continuar abrindo `diagnostico.html` |
| 8 · Encerramento | Fecho em serif violeta discreta | Sem atrapalhar leitura ou contato |

**O formulário V13 foi mantido intacto:** um formulário de diagnóstico não deve herdar os efeitos de marketing se isso dificultar preenchimento, relatório ou impressão.

## Arquitetura e reversibilidade

- Base de referência: `archive/v13-base-aprovada-2026-10-16`, commit `ec0e27f8d47dfa0242f6027e6515d7cdc150180e`.
- Branch experimental: `design/v14-cinematic-lab`.
- A única mudança no HTML é a classe `cinematic-v14`, inclusão de link de Instrument Serif, `cinematic-v14.css`, `cinematic-v14.js`, e ajuste de theme-color.
- Nenhuma alteração nas âncoras, texto comercial, composição DOM, estados de interação ou script original.
- Ao remover a classe e os dois links de arquivo, voltamos ao comportamento anterior. A fonte só é solicitada quando seu `link` é mantido.
- Sem GSAP, Lenis, React, Three.js, canvas de animação adicional ou bibliotecas JS externas.
- JS decorativo progressivo: se não carregar, os elementos originais continuam legíveis; observações entram em ação apenas quando IntersectionObserver estiver disponível.
- `prefers-reduced-motion` desliga motion cosmético; efeitos de hover 3D somente ponteiro preciso em desktop.
- Animações decorativas contínuas de starfield ficam estáticas em mobile.

## Próximas validações — não assumir aprovação visual

- [ ] Captura real a 1440×900 e 1920×1080: analisar legibilidade da serifada e espaços.
- [ ] Captura real a 390×844 e 360×740: evitar quebras/overflow de palavras em Instrument Serif.
- [ ] Verificar desenvolvimento das três cenas do quadro 2 e estados de foco dos sete nós do quadro 3.
- [ ] Rolagem do carrossel em todas as cinco etapas; mouse tilt nunca deve modificar o track.
- [ ] Validar contraste nos quadros claros, inclusive em dispositivos de baixa qualidade.
- [ ] Medir LCP, CLS e tempo de trabalho na main thread com efeitos ligados/desligados.
- [ ] Testar Windows/Chrome, Safari/iOS, Android e movimento reduzido.
- [ ] Checar fallback do carregamento de Google Fonts.
- [ ] Testar links relativos no visualizador externo de HTML (pode não carregar CSS e JS externos).
- [ ] Só considerar merge após aprovação visual do proprietário.

## Critério de aceitação

Cinematográfico não pode significar lento, invasivo ou ilegível. O resultado desejado é uma experiência que conta a história da transformação do conhecimento em capacidade digital sem interferir no que funciona hoje.
