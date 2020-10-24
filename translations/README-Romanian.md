# Issue Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

Un instrument de căutare proiectat să te ajute să găsești proiecte open source

## Demo & Utilizare

- Folosește comutatoarele pentru a filtra rezultatele. Opțional, poți introduce cuvinte cheie
- Apasă pe un titlu pentru a deschide un issue în Github într-un tab nou

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Context

Ideea acestui proiect a venit când voiam să găsesc proiecte cool pe Github, dar nu eram satisfăcut de căutarea nativă din Github.

Am început să caut issues în timpul [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (un eveniment anual sponsorizat de Digital Ocean care încurajează dezvoltatorii să se implice în proiecte open source. Dacă faci 4 PR-uri într-o lună, primești un tricou GRATIS 👕).

## Dezvoltare Locală

Că să rulezi acest proiect pentru dezvoltare locală, dacă ai NODE.js și NPM instalate, urmează acești pași în terminal. Aplicația va rula pe portul 3000.

```bash
npm install
npm start
```

Dacă nu vrei să instalezi Node.js și ai Docker instalat pe sistem, atunci folosește doar `Dockerfile` și scriptul care pregătește toată aplicația într-un container separat. Aplicația va rula pe portul 3000.

```bash
./dev.sh
```

## Contribuții

Mulțumim pentru interes! Toate tipurile de contribuții sunt binevenite. **HACK AWAY!** 🔨🔨🔨

- Creează un fork și o clonă a acestui repository
- Creează un branch din branch-ul `master`
- Rulează `npm run lint:fix` că să te asiguri că formatarea e corectă
- Te rugăm să deschizi PR-ul tău cu branch-ul `master` branch la bază

