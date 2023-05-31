# Astro React BBL Site

# ChangeLog

## Commit v0.3 (RoboXGamer)

- added basic layout
- Added automation to add more content by just adding `.md` files.
- This website is made using React and Astro.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
    ├── images/
├── src/
│   ├── components/
│   ├── content/
            ├── modpacks/
│   ├── layouts/
│   ├── pages/
    └── styles/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/content/` directory contains "collections" of related Markdown and MDX documents.

Any static assets, like images, can be placed in the `public/images` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
