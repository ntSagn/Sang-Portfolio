# Sang Portfolio (React + Vite)

Personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

## Run locally

```bash
npm install
npm run dev
```

Build production bundle:

```bash
npm run build
```

## Deploy to GitHub Pages (Automatic)

This repo is configured with GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

How it works:
- On every push to `main`, GitHub Actions builds the site.
- Build command uses Vite base path for repository pages:
  - `npm run build -- --base=/<repo-name>/`
- Workflow deploys `dist/` to GitHub Pages.

### One-time setup on GitHub

1. Push this code to a GitHub repository.
2. Open repository settings:
	- `Settings` -> `Pages` -> `Build and deployment`.
3. Ensure source is `GitHub Actions`.
4. Push to `main` and wait for workflow `Deploy Vite Site to GitHub Pages` to complete.
5. Your site URL will be:
	- `https://<username>.github.io/<repo-name>/`

## Quick Git commands for first push

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```
