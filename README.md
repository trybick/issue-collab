# Issue Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> Uma ferramenta feita para ajudar você a achar projetos de código aberto

## Demo & Uso

- Use os interruptores para filtrar os resultado. Opcionalmente coloque palavras-chaves
- Clique em um título para abrir uma issue no GitHub em outra aba.

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Por trás

A ideia para este projeto vem da vontade de achar projetos legais no GitHub mas não estar satisfeito com os resultos nativos do GitHub.

Eu comecei a procurar por issues na [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (um evento anual oferecido pela Digital Ocean que encoraja desenvolvedores a se envolverem em projetos de código aberto. Faça 4 PRs em um mês e ganhe uma camisa grátis 👕).

## Desenvolvimento local

Para rodar este projeto em um ambiente local, se você tiver Node.js ou NPM instaladdo,
siga os próximos passos em um terminal. A aplicação rodará na porta 3000.

```bash
npm install
npm start
```

Se você não quer instalar Node.js e você tem um Docker no seu sistema,
apenas use o `Dockerfile` e o script que prepara toda a aplicação
em um contêiner separado, a aplicação rodará na porta 3000.

```bash
./dev.sh
```

## Contribuição

Obrigaddo pelo seu interesse. Todos os tipos de contribuções são bem-vindos. **VAMOS HACKEAR!*** 🔨🔨🔨

- Faça um fork e clone deste repositório
- Crie sua branch a partir da branch `master`
- Rode `npm run lint:fix` para garantir a formatação correta
- Por favor, abra seu PR com a branch `master` de referência

