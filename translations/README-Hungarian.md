# `Issue` Együttműködés

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> Egy keresőeszköz, amelynek célja nyílt forráskódú projektek megtalálása

## Bemutató és Használat

- Használd a csúszkákat az eredmények szűréséhez. Írd be a kulcsszavakat, amikre rá akarsz keresni (opcionális)
- Kattints valamelyik megjelenő címre, hogy megnyisd a probléma (`issue`) GitHub oldalát egy új lapon

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Háttér

E projekt ötlete abból ered, hogy a GitHub saját keresőfunkciója nem mindig elegendő érdekes projektek megtalálásához. 

Én a [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) 
keretében kezdtem keresgélni, ami egy éves esemény a Digital Ocean szponzorálásával. 
A rendezvény célja, hogy nyílt forráskódú projektekben való közreműködésre ösztönözze a fejlesztőket.
Hozz létre 4 `pull request`-et a hónap folyamán és egy ingyen pólót kapsz ajándékba.👕

## Lokális Fejlesztés

Amennyiben a Node.js és az NPM már telepítve van, a projekt elindításához futtasd a következő parancsokat a terminálban 
(az alkalmazás a 3000-es port-on fog futni):

```bash
npm install
npm start
```

Ha nem akarod telepíteni a Node.js-t, de a Docker jelen van a rendszerben, használhatod a Docker fájlt és a lenti szkriptet, 
amely külön konténerben készíti elő az alkalmazást és a 3000-es port-on futtatja azt:

```bash
./dev.sh
```

## Hozzájárulás

Köszönjük az érdeklődést! Minden típusú hozzájárulást szívesen fogadunk. **Kódolásra fel!** 🔨🔨🔨

- Készíts egy másolatot a `repo`-ról (`fork` + `clone`)
- Hozz létre egy új ágat (`branch`) a fő ágból (`master branch`)
- `Pull request`-et a master branch-et alapul véve indíts
- Figyeld a `pull request` ellenőrzéseit és győződj meg róla, hogy a Netlify telepítési előnézete megfelelő

