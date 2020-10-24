# Issue Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> Un tool di ricerca creato per aiutarti a trovare progetti open source su GitHub

## Demo & Utilizzo

- Usa gli switch per filtrare i risultati. Opzionalmente inserisci parole chiave
- Fai click su di un titolo per aprire la issue su GitHub in una nuova scheda

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Background

L'idea per questo progetto arriva dal voler trovare bei progetti su GitHub e allo stesso tempo non essere soddisfatti della ricerca nativa di GitHub.
Ho iniziato a cercare delle issue durante [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (un evento annuale sponsorizzato da Digital Ocean che incoraggia gli sviluppatori ad avvicinarsi all'Open Source. Fai 4 Pull request nel mese di Ottobre e ricevi gratis una T-shirt 👕).

## Sviluppo in locale

Per eseguire questo progetto in locale se hai Node.js e NPM installati segui questi step in un terminale, l'app si aprirà sulla portà 3000.

```bash
npm install
npm start
```

Se non vuoi installare Node.js ed hai Docker sul tuo sistema, 
allora puoi utilizzare il 'Dockerfile' e lo script che prepara l'applicazione in un ambiente separato
L'app si aprirà sulla porta 3000.

```bash
./dev.sh
```

## Contribuire

Grazie dell'interesse! Tutti i tipi di contributo sono gratiti. **HACK AWAY!** 🔨🔨🔨

- Forka e clona questa repository
- Crea il tuo branch dal 'master' branch
- Esegui `npm run lint:fix` per assicurarti del corretto formatting
- Apri una pull request con il `master` branch come base
