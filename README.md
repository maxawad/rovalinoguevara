# Rovalino Guevara: Family, Faith and Community

A fundraising and community website for the Rovalino Guevara family. It tells the story of their charity work and lets visitors learn about the projects, read family recipes and find out how to support them.

## What it does

- **Home**: introduces the family and links to the three projects.
- **Food Bank**: explains the food bank and donation work.
- **Church Project**: shows the phases of a planned church in Alicante, Spain, and shows a wallet address visitors can copy to donate in USDC on the Base network.
- **Recipes**: a browsable book of family recipes with ingredients and steps.
- **Sponsor**: sponsorship tiers with a call to action and a contact email.

All content is written directly in the page components. There is no backend, database or API key.

## Tech stack

- React 19 with React Router
- Vite
- Tailwind CSS 4
- lucide-react icons
- Google Fonts (Inter and Playfair Display), loaded from the web

## Run it

You need Node.js 20 or newer.

```bash
npm install
npm run dev      # development server with hot reload
npm run lint     # optional code check
```

## Build a static site

```bash
npm run build    # writes the site to dist/
npm run preview  # serve the built site locally
```

The output in `dist/` is plain static files and needs no secrets, so it can be hosted on any static host. Because the site uses client side routes, the host must send unknown paths to `index.html`. The file `public/_redirects` already does this for Cloudflare Pages and Netlify.

## Status

Working. It is a finished front end with placeholder content in places: the "Sponsor Now" and donate buttons currently link to the gofundme.com home page rather than a real campaign page, and the donation wallet address and contact email should be confirmed before the site is promoted.

## Credits

Built from the Vite React template. The family, project descriptions and recipes belong to the Rovalino Guevara family.
