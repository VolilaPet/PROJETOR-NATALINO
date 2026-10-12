# Projetor Natalino

Landing page em HTML, CSS e JavaScript com as quatro dobras implementadas conforme os prompts e as referências visuais aprovadas.

## Abrir localmente

Execute `npm run dev` nesta pasta e acesse http://127.0.0.1:4174. Também é possível abrir `dist/index.html` diretamente no navegador.

## Editar

- `dist/index.html`: textos e estrutura das quatro dobras.
- `dist/styles.css`: visual e responsividade das quatro dobras.
- `dist/script.js`: navegação para a oferta, reprodução do vídeo, FAQ e endereço do checkout em `OFFER_CHECKOUT_URL`.
- `dist/assets/`: arquivos de imagem e vídeo utilizados pela página.

## Primeira dobra

Apresentação, foto das crianças e três benefícios. A estrutura, os estilos e os arquivos visuais foram preservados durante a implementação da segunda dobra.

## Segunda dobra

Demonstração com vídeo real e galeria de três cards. O player utiliza `dist/assets/projetor-ad-01.mp4`, cópia idêntica do arquivo `PROJETOR AD 01.mp4` enviado pelo cliente (hash SHA-256 conferido).

O vídeo tem 720 × 1280 px (9:16) e duração de 16,8 segundos. Exibido na proporção original, sem corte, alteração ou autoplay. A capa `video-poster.webp` foi extraída do vídeo em 1,5 segundo. O Play central inicia a reprodução real. Controles nativos permitem pausa, volume, avanço e tela cheia quando suportados pelo navegador. O servidor local suporta solicitações de faixa de bytes para o avanço do vídeo.

As três imagens da galeria foram recortadas dos quadros da referência aprovada, sem textos incorporados. Nenhuma imagem ou vídeo foi gerado por IA.

## Verificação

Conferência com Edge em 320, 390, 768, 1122 e 1440 px: sem rolagem horizontal, vídeo preservando a proporção 9:16, três cards carregados e layout adaptado ao celular. Reprodução, pausa, avanço para 10 segundos, volume e retomada testados em larguras de computador e celular. Botão com foco visível; nenhum erro JavaScript.

Capturas e registro de verificação da segunda dobra em `output/`. Fontes servidas pelo Google Fonts, com fallback local serifado/sans-serif.


## Terceira dobra

FAQ com exatamente cinco perguntas e respostas do prompt aprovado. Todas começam fechadas; abrir uma pergunta fecha a anterior. Os cabeçalhos são botões nativos, com foco visível e suporte a Enter/Espaço. `aria-expanded`, `aria-controls` e regiões de resposta identificadas mantêm os estados acessíveis sincronizados. A transição respeita a preferência por movimento reduzido.

A seção foi acrescentada depois da segunda dobra, com HTML, CSS e JavaScript, ícones SVG inline e fontes já utilizadas. Nenhuma imagem, fonte, biblioteca ou dependência nova. Não foram adicionados ramos fotográficos nem o fundo da referência.

A resposta sobre envio para todo o Brasil está preservada conforme o texto fornecido, em `faq-answer-5` no HTML. A última dobra foi solicitada posteriormente com envio e frete grátis para todo o Brasil, confirmando essa política no material fornecido pelo cliente.

Conferência em 320, 390, 768, 1122 e 1440 px: estados aberto/fechado, exclusividade, teclado, foco visível, textos exatos e ausência de rolagem horizontal. Funcionamento também verificado abrindo `dist/index.html` diretamente. Estrutura, CSS e JavaScript anteriores preservados; todos os arquivos de mídia permanecem idênticos; vídeo continua reproduzindo.

Capturas e registro de conferência em `output/terceira-dobra-*`.


## Última dobra: oferta

Seção `#oferta` acrescentada depois do FAQ, com painel vinho, título emocional, preço de **R$ 97,90**, parcelamento de **12x de R$ 9,96 no cartão**, frete grátis para todo o Brasil, benefícios, CTA e três itens de confiança. A frase sobre Pix, boleto ou cartão foi removida da oferta. Todos os textos, preços, selos, ícones e botão são HTML/SVG editáveis. As três dobras anteriores e seus arquivos foram preservados.

O CTA da primeira dobra já leva à oferta. O botão final está conectado ao checkout fornecido pelo cliente: https://gwx-industria-e-comercio-ltda.pay.yampi.com.br/r/5M9NWZZ2MS. O endereço fica em `OFFER_CHECKOUT_URL` no fim de `dist/script.js` e também no `href` do HTML, funcionando sem JavaScript.

Conferência em 320, 390, 768, 1122 e 1440 px: sem rolagem horizontal, preço sem corte, botão com área de toque de 62–82 px e foco visível, navegação do topo até a oferta e efeitos respeitando movimento reduzido. FAQ e vídeo seguem funcionando.

### Fundo decorativo

Edição feita com a ferramenta ImageGen integrada (modo built-in), a partir da referência aprovada. Foram removidos os textos, selo, preço, botão e linha de confiança da arte, preservando Papai Noel, luzes e projeções laterais. O resultado é usado somente como decoração atrás do conteúdo nativo da página.

Arquivos finais salvos no projeto:

- `dist/assets/oferta-fundo.webp` — 1536 × 798, aproximadamente 81 KB.
- `dist/assets/oferta-fundo-800.webp` — 800 × 416, aproximadamente 27 KB.

Prompt final utilizado:

```text
Use case: precise-object-edit. Asset type: decorative background for the final offer panel of an existing Christmas projector landing page. Input image is the edit target and approved reference. Primary request: extract/reconstruct ONLY the dark burgundy rectangular main offer panel as a clean background image. Output landscape approximately 1.93:1 (for example 1536 x 800). Remove the cream area and heading above the panel and all cream margins. Within the panel remove ALL typography, numbers, currency, the gold shipping badge, all gold tree/divider/spark UI decorations in the center, the large red purchase button, and all footer trust text/icons/dividers. Inpaint those removed UI areas with the same warm dark burgundy/red-brown backdrop. Preserve the Santa Claus illustration on the left EXACTLY as in the reference: friendly elderly Santa, glasses, white beard, red hat, white mitten pointing right, same face/pose/scale. Preserve the pine branches, warm fairy lights, and red bauble on the lower left. Preserve the softly blurred house facade with colorful Christmas projections on the right, same composition/lighting/colors. Keep these side scenes discrete; central area must remain dark, clean and spacious so editable HTML copy, price and button can be overlaid. Do not add other people, features, products, words, logos, or controls. Maintain fidelity to the approved visual and existing photographic/illustrative finish. The output is only the decorative background, not a website mockup.
```

