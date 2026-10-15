# Your portfolio website

## Quick start

1. Extract this ZIP.
2. Open the `new-portfolio` folder in VS Code.
3. Install Node.js 20.19+ or 22.12+ if needed.
4. Run:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. This React project needs a development server; double-clicking index.html will not run it.

## Create your private GitHub repository

1. On GitHub, create a repository named `new-portfolio` and select **Private**.
2. Extract the ZIP before uploading. Upload the contents of the `new-portfolio` folder, including `src`, `public`, package.json, package-lock.json, index.html, README.md, THIRD_PARTY.md, and .gitignore. Do not upload the ZIP as your source code.
3. Commit the uploaded files.

Alternatively, in a terminal inside the extracted folder:

```sh
git init -b main
git add .
git commit -m "Add AI and automation portfolio"
git remote add origin https://github.com/Hassan-Irtaza/new-portfolio.git
git push -u origin main
```

Create an empty repository first if using these commands. GitHub will handle authentication when you push.

## Build and deploy

```sh
npm run build
```

Deploy the resulting `dist` folder to a static host. A prebuilt `dist` folder is also included for convenience. Its files are ignored by Git; the repository keeps your editable source and can rebuild them.

## Customize

- `src/main.jsx`: projects, biography, contact details, social links, and Rays configuration.
- `src/styles.css`: layout, colors, typography, and responsive rules.
- `src/components/Rays.jsx`: the requested Rays component.
- `public/favicon.svg`: site icon.

No API keys or backend are required. Fonts are fetched from Google Fonts with local fallback fonts. The Rays component and runtime dependencies are bundled locally during production builds.

## Validation

Production build and server-rendered content checks passed. Browser visual testing was unavailable in the build environment.
