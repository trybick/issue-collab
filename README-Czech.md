# Issue Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> Vyhledávací nástroj, který Vám pomůže najít open source projekty

## Ukázka & Použití

- Pomocí přepínačů můžete filtrovat výsledky. Volitelně lze zadat cílová slova.
- Klikem na nadpis problému budete přesměrováni na stránku daného problému na Githubu na nové kartě prohlížeče  

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Původ

Myšlenkou projektu je najít super projekty na GitHubu. Nativní vyhledávání na GitHubu je ale neuspokojující. 

Začal jsem hledat problémy během [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (Každoroční projekt sponsorován Digital Ocean, který podporuje vývojáře, aby se zapojili do vývoje open source. Odměnou za 4 pull requesty je tričko zdarma 👕).

## Lokální vývoj

Pokud máte naistalován Node.js a NPM tak pro spuštění projektu pro lokální vývoj následujte
následující kroky. Applikace bude spustěna na portu 3000.

```bash
npm install
npm start
```

Pokud nechcete instalovat Node.js ale máte na svém systému Docker, použijte `Dockerfile`. 
Celá aplikace se spustí v samostatném kontejneru. 
Applikace bude spustěna na portu 3000.

```bash
./dev.sh
```

## Přispívání

Děkuji za Váš zájem. Všechny typy přispívání k tomuto projektu jsou vítány. **HACK AWAY!** 🔨🔨🔨

- Forkněte a naklonujte repozitář
- Vytvořte novou větev z `master` větve
- Otevřete novou pull request z `master` větve
- V náhledu na Netlify zkontrolujte zda pull request vypadá tak, jak má

