# Artur Kumik — Portfolio

React + Vite personal portfolio.

## Run locally

```sh
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173/).

## Checks

```sh
npm run lint
npm run build
```

## Hosting on Vercel

Import this GitHub repository, select Vite, use `npm run build` and output directory `dist`.
`vercel.json` includes the SPA rewrite needed for refreshing or directly opening page URLs.
The site is configured for the domain root, not the old `/website/` subdirectory.

Before launch, set `og:image` in `index.html` to the absolute deployed URL of `/social-preview.png`.
A finalized résumé PDF is still needed for the résumé navigation link.
