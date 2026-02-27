# Iron Shift — React Showcase (Create React App)

This is a ready-to-run React (Create React App) starter project for **Iron Shift**.
It includes Tailwind CSS, Framer Motion, and a prewired GitHub Pages deploy script for the user **InfraRecon**.

## Quick start

1. Unzip this folder and open it in VS Code (or your editor).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm start
   ```
   The site will open at http://localhost:3000

## Deploy to GitHub Pages

1. Create a new *public* repository on GitHub named `ironshift`.
2. In this project, edit `package.json` if you want to change the homepage.
   It is currently set to: `https://InfraRecon.github.io/ironshift`
3. Push the project to your GitHub repository (you can use the GUI in GitHub Desktop or VS Code).
4. Deploy:
   ```bash
   npm run deploy
   ```
   This uses `gh-pages` to publish the `build/` folder. Your site will appear at the homepage URL.

## Where to edit content

- `src/App.js` — main single-page Iron Shift showcase. Edit the `games` and `updates` arrays to add content.
- `src/index.css` — Tailwind entry (use utility classes).
- `public/index.html` — SEO title and meta.

## Notes

- Tailwind and Framer Motion are already configured in `package.json` devDependencies.
- If you prefer Vite in the future, I can convert the project.

Enjoy — if you hit any errors, tell me the error text and I'll help fix it.
