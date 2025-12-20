# Problème Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> Un outil de recherche conçu pour vous aider à trouver des projets open source

## Démonstration et utilisation

- Utilisez les interrupteurs à bascule pour filtrer les résultats. En option saisir des mots clés de texte
- Cliquez sur un titre pour ouvrir le problème sur GitHub dans un nouvel onglet

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Contexte

L'idée de ce projet vient du fait de vouloir trouver des projets sympas sur GitHub mais de ne pas se satisfaire de la recherche native de GitHub.

J'ai commencé à rechercher des problèmes pendant [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (Un événement annuel sponsorisé par Digital Ocean qui encourage les développeurs à s'impliquer dans le domaine de l'open source. Faites 4 RP en un mois et recevez un T-shirt GRATUIT 👕).

## Développement local

Pour exécuter ce projet pour le développement local si vous avez Node.js et NPM
installé, suivez ces étapes dans un terminal.
L'application fonctionnera sur le port 3000.

```bash
npm install
npm start
```

Si vous ne souhaitez pas installer Node.js et que Docker est présent sur votre système, alors utilisez simplement le "Dockerfile" et le script préparera l'application complète dans un conteneur séparé. L'application fonctionnera sur le port 3000.

```bash
./dev.sh
```

## Contribuant

Merci pour ton intérêt! Tous les types de contributions sont les bienvenus. **HACK AWAY!** 🔨🔨🔨

- Forker et cloner ce dépositaire
- Créez votre branche à partir de la branche "maître"
- Exécutez `npm run lint:fix` pour garantir un formatage correct
- Veuillez ouvrir votre RP avec la branche "maître" comme base
