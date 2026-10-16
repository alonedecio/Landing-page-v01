# V15 — Português do Brasil e Inglês Britânico

## Arquitetura aprovada

O site continua **estático**, sem React, framework de tradução ou tradução executada no navegador. Cada idioma é uma página completa, permitindo preservar a experiência, os scripts e a pontuação existentes.

| Página | pt-BR | en-GB |
|---|---|---|
| Landing | `index.html` | `index-en.html` |
| Diagnóstico | `diagnostico.html` | `diagnostico-en.html` |

Os quatro arquivos devem ser publicados **no mesmo diretório**. Os links são relativos. `PT / EN` em ambas as páginas permite a alternância de idioma, enquanto o CTA de diagnóstico leva à página no mesmo idioma. Mudar de idioma durante um diagnóstico **reinicia a avaliação** (não armazenamos respostas para retomada), portanto não prometer continuidade de sessão.

## Política editorial

- Identidade da marca **conhecimento/vivo** preservada.
- Inglês adaptado para público do Reino Unido: `organisation`, `authorised`, `prioritise`, `judgement`, `behaviour` e demais escolhas de en-GB.
- Não presumir estrutura societária, escritórios físicos ou obrigações legais formalmente verificadas a partir da existência de uma tradução.
- No inglês, as referências à proteção de dados mencionam LGPD e UK GDPR **quando aplicáveis**, sem promessa de conformidade automática.
- Os exemplos nos cinco mockups de método e os textos dinâmicos dos grafos também são localizados.
- O diagnóstico inglês usa os mesmos IDs de dimensão, as mesmas 12 perguntas em ordem, a mesma escala ordinal 1–5 e a mesma lógica de score, ressalvas e dependências; somente conteúdo de apresentação foi traduzido.
- Data no relatório en-GB: `DD/MM/YYYY`, com `toLocaleDateString('en-GB')`.

## Manutenção

1. Ao alterar copy na landing, revisar também `index-en.html` — especialmente os textos do JavaScript (status da cena, dimensões dos grafos e painel de capacidades).
2. Ao alterar questões, regras de score ou textos do relatório, rever ambas as páginas de diagnóstico e repetir os testes de paridade.
3. Ao adicionar nova seção, manter os mesmos IDs e âncoras nos dois idiomas.
4. Antes de publicação, testar a renderização real em 390 px e 1440 px, links, comportamento do formulário, teclado, exportação PDF, fontes e compatibilidade de navegadores.
5. Ajustar os links `hreflang` para URLs absolutas depois de definida a URL pública final; não inventar domínio ou canonical agora.
6. Configurar contato comercial real: a landing ainda contém o placeholder `contato@exemplo.com` nas duas versões. O diagnóstico continua transparente sobre a inexistência de canal de envio configurado.

## Verificações concluídas

- HTML: estrutura, IDs e âncoras correspondem entre os idiomas.
- CSS: idêntico em cada par de páginas.
- JavaScript: sintaxe válida nos quatro arquivos.
- Avaliação: os nove cenários de testes de cálculo e prioridade produzem pontuações, estágios e prioridades equivalentes em PT e EN.
- Sem tradução de conteúdo em tempo de execução e sem integrações ou coleta de dados adicionadas.

**Ainda necessário:** validar visualmente mobile/desktop e PDF em navegador real antes de realizar merge/publicação.
