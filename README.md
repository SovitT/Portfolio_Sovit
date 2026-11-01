# Sovit Thakre: Portfolio

React + Vite + Framer Motion + custom CSS. All content lives in `src/data/data.js`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Resume
Place your PDF at `public/Sovit_Thakre_Resume.pdf`. Until then the Download Resume button shows a message instead of a broken download.

## Push to GitHub
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/SovitT/<repo-name>.git
git push -u origin main
```

## Deploy on Vercel
1. Sign in at vercel.com with GitHub and click **Add New → Project**.
2. Import the repo. Framework preset: **Vite** (build `npm run build`, output `dist`).
3. Click **Deploy**. Every push to `main` redeploys.

## What to update
| Item | Where |
|---|---|
| Photo | put a file in `src/assets/`, import it in `data.js`, set `profile.photo` |
| Email, LinkedIn | `profile.email`, `profile.linkedin` in `src/data/data.js` |
| Resume PDF | `public/Sovit_Thakre_Resume.pdf` |
| Project screenshots, GitHub/live links, details | `projects` in `data.js` (`image`, `github`, `live`, `details`) |
| Certifications | `certifications` in `data.js` |
| Education years, achievements | `education`, `achievements` in `data.js` |
