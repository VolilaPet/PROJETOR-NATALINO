# Enviar o projeto para o GitHub

1. Extraia o ZIP.
2. Abra a pasta `projetor-natalino` extraída.
3. No seu repositório do GitHub, use **Add file → Upload files** e envie o conteúdo dessa pasta, preservando a estrutura de pastas.
4. Salve o envio com **Commit changes**.

O pacote contém o projeto completo: HTML, CSS, JavaScript, imagens, vídeo, servidor local, configuração e documentação. Não é necessário instalar dependências para executar o servidor.

## Visualizar no computador

Com Node.js instalado, abra um terminal na pasta do projeto e execute:

```sh
npm run dev
```

Acesse `http://127.0.0.1:4174`. Também é possível abrir `dist/index.html` diretamente no navegador.

## Hospedar

Este projeto é estático e não precisa de compilação. A pasta a publicar é **`dist`**, que contém `index.html` e todos os arquivos utilizados pela página. Enviar o projeto ao GitHub salva o código; a hospedagem deve ser configurada separadamente.

O arquivo `.openai/hosting.json` identifica a publicação existente no Sites e só é necessário para continuar usando essa hospedagem.

## Conteúdo atualizado

- Quatro seções completas, com layout para computador e celular.
- Vídeo real e perguntas frequentes interativas.
- Oferta de R$ 97,90 ou em 12x de R$ 9,96 no cartão.
- Botão final conectado ao checkout fornecido.

Os arquivos de execução, mídia e documentação estão incluídos. Histórico local do Git, credenciais, capturas de conferência e arquivos temporários não fazem parte do pacote.
