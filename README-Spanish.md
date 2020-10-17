# Issue Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> Una herramienta de búsqueda diseñada para ayudarte a buscar proyectos open source.

## Demostración y uso

- Usa los switch para filtrar resultados. Opcionalmente, añade palabras clave.
- Clica en un título para abrir una issue en GitHub en una pestaña nueva.

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Background

La idea para este proyecto viene de querer encontrar buenos proyectos en GitHub pero no estar satisfecho con la búsqueda nativa de GitHub.

Empecé buscando issues durante el [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (un evento anual patrocinado por Digital Ocean para adentrarse en el mundo open source. Crea 4 PR en un mes y llévate una camiseta GRATIS👕).

## Desarrollo en local

Para arrancar este proyecto para desarrollar localmente si dispones de Node.js y NPM instalados, sigue estos pasos en tu terminal. Tu app se ejecutará en el puerto 3000.

```bash
npm install
npm start
```

Si no quieres instalar Node.js y tienes Docker en tu sistema, simplemente usa `Dockerfile`y el script que prepara la aplicación en un container por separado. La aplicación se ejecutará en el puerto 3000.

```bash
./dev.sh
```

## Contribuir

¡Gracias por tu interés! Todo tipo de contribuciones son bienvenidas. **A HACKEAR!** 🔨🔨🔨

- Haz un fork de este repositorio y clónalo.
- Crea tu rama desde la rama `master`.
- Ejecuta `npm run lint:fix` para asegurar un formato correcto.
- Por favor, abre tu PR con la rama `master` como base.
