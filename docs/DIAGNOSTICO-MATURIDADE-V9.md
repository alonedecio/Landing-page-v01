# V9 — Diagnóstico de maturidade em IA: especificação e critérios

## Objetivo da experiência

O Quadro 07 da landing cria uma percepção honesta de urgência: a IA avança mais rápido do que equipes conseguem absorver individualmente. O CTA deixa de enviar o visitante à seção de conversa e abre uma **página completa**, `diagnostico.html`.

A página é um formulário, não chat. Não requer cadastro, não envia respostas, não usa backend nem `localStorage`. A sequência é: introdução → 3 blocos de 4 perguntas → relatório → CTA para conversar sobre um piloto. Pode ser reutilizada em futuras versões com CRM **somente após novo desenho de privacidade e consentimento**.

### Referências analisadas

- Screenshots enviados pelo usuário do diagnóstico da Pixel: questionário conversacional, radar de maturidade, níveis progressivos e resultado final.
- Referência pública: https://www.pixeleducacao.com.br/diagnostico/ — localização confirmada; conteúdo interativo completo não esteve acessível à consulta pública.
- Inspiração conceitual: jornada de cinco níveis em forma de progressão. Redações, perguntas, pesos, visuais e relatório são originais e alinhados à startup. Não copiamos código nem apresentamos estimativas da referência como se fossem nossas.

## Concepção da jornada

1. **Pessoas e valor (4 perguntas)**: adoção de IA no dia a dia, padronização, objetivos e impacto.
2. **Conhecimento e controle (4 perguntas)**: documentação da expertise, contexto acessível, regras de tratamento de dados e evals.
3. **Operação e agentes (4 perguntas)**: automação de fluxos, integrações, autonomia com limites e gestão de agentes.

Os 12 itens são distribuídos em **seis dimensões** com dois itens por eixo:

| Eixo | O que avalia | Onde entra nossa proposta |
| --- | --- | --- |
| Adoção | Uso recorrente e aprendizagem da organização | Capacitação e gestão das práticas |
| Valor | Objetivos e medição de resultados reais | Descoberta, priorização e indicadores |
| Contexto | Critérios, casos, fontes, revisão e acesso | Estruturação de conhecimento em Markdown e bases revisáveis |
| Governança | Privacidade, permissões, LGPD, avaliação e qualidade | Testes, supervisão e gestão de riscos |
| Automação | Apoio a processos e sistemas conectados | Agentes com habilidades e ferramentas |
| Autonomia | Limites de execução, aprovações e responsáveis | Governança e evolução de agentes |

## Escala de pontuação

Cada resposta recebe uma pontuação entre 0 e 4. As alternativas progridem de ausência de prática até implementação mais estruturada. **Não há resposta “ideal” implícita em marketing: a pontuação reflete apenas o relato de quem responde.**

- Pontuação de cada dimensão: `(soma das duas respostas / 8) × 100`.
- Índice geral: média simples das seis dimensões (arredondada).
- Classificação indicativa em cinco faixas: 0–19, 20–39, 40–59, 60–79 e 80–100.
- **Freio de segurança:** se Governança tiver valor inferior a 25, o nível máximo é 3, mesmo que o índice agregado seja alto. O relatório explica explicitamente quando esse freio é acionado. Isso é uma **regra editorial de prudência, não um índice validado**.
- Três prioridades geradas: os três eixos com pior pontuação. Critérios de desempate seguem a ordem estável dos eixos.
- Gráfico radar: uma visualização das seis dimensões, não comparação com concorrentes nem benchmark de mercado.

### Os cinco níveis

1. Experimentos isolados.
2. Uso compartilhado.
3. Conhecimento estruturado.
4. Agentes supervisionados.
5. Capacidades geridas.

Os nomes refletem nossa visão de transformar expertise em ativos digitais, estruturar pessoas + agentes e preservar controle. **Não constituem escala validada cientificamente ou certificação.**

## Segurança e ética de conversão

- Nenhuma estimativa de economia, horas, receita ou ROI sem dados externos e premissas fundamentadas.
- Nenhuma comparação percentual com “média de mercado”.
- Não solicitar informações sensíveis, detalhes de clientes, arquivos ou segredos.
- Não transmitir respostas para servidor, CRM, analytics ou qualquer endpoint.
- Botão final conduz à seção de contato existente na landing; **o endereço de contato da landing ainda é demonstrativo e precisa ser substituído antes de publicar**.
- A opção “Salvar em PDF” aciona apenas `window.print()`, permitindo ao navegador gerar o documento.
- O usuário pode voltar às etapas e revisar as respostas na sessão, além de refazer todo o questionário.

## Critérios mínimos de QA antes da aprovação

- [x] Rotas relativas `index.html → diagnostico.html` e `diagnostico.html → index.html#conversa` conferidas estaticamente.
- [x] JavaScript sintaticamente válido, tags e CSS equilibrados, IDs únicos.
- [x] Cálculo testado nos extremos e no caso de governança muito baixa.
- [ ] Teste real no navegador desktop: início, 12 respostas, avanços, retorno, radar, print.
- [ ] Teste real em mobile pequeno e tablet: toque, rolagem, espaçamento e overlays.
- [ ] Teste por teclado e leitor de tela; verificar contraste.
- [ ] Teste visual de entrada/saída no quadro 07 dentro da landing.
- [ ] Substituir marca e contato demonstrativos.
- [ ] Se houver coleta de lead no futuro, definir tratamento, consentimento e política de privacidade específicos.

## Decisão de UX: página própria em vez de popup

O formulário ocupa três blocos completos com 12 perguntas e um relatório longo. Um modal teria rolagem interna, complicações de foco e comportamento ruim em dispositivos móveis. Uma página dedicada permite progresso evidente, histórico natural, leitura e impressão do relatório, além de eventual evolução da ferramenta sem interferir na narrativa cinematográfica da landing.
