# Issue Collab

> Find open source projects on GitHub by searching with labels, languages, and search terms

## Usage & Demo

- Click the toggle switches to narrow down search results by labels or language
- Optionally add search terms to the text input
- Click a title to open an issue on GitHub in a new tab.

![demo gif](https://user-images.githubusercontent.com/39889198/58373516-62beae00-7efd-11e9-940d-83109f260e4f.gif)

## Background

The idea for this project comes from wanting to find cool projects on GitHub but not being satisfied with GitHub's native search.

I began searching issues during [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (an annual event sponsored by Digital Ocean which encourages developers to get involved with open source. Make 5 PRs in a month and get a FREE T-shirt 👕).

## Local Development

To run this project for local development if you have Node.js and NPM
installed follow these steps in a terminal. The app will run on port 3000.

```bash
npm install
npm start
```

If you don't want to install Node.js and you have Docker present on your
system, then just use the `Dockerfile` and the script that prepares
the whole application in a separate container. The app will run on port 3000.

```bash
./dev.sh
```

## Contributing

Thank you for your interest! All types of contributions welcome.
 **HACK AWAY!** 🔨🔨🔨

- Fork and clone this repository
- Create your branch from the `master` branch
- Please open your PR with the `development` branch as the base

---

#### This application uses Netlify Continuous Delivery on the `master` branch

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)
