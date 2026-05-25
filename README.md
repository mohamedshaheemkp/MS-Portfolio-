# MS Portfolio

A modern personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

It showcases AI development, creative UX/UI design, and interactive frontend experiences with a working EmailJS contact form.

## Features

- Hero section with animated background and resume CTA
- About section with stat cards and personal summary
- Projects section with portfolio entries and placeholder live/demo links
- Contact form powered by EmailJS
- Smooth scrolling, cursor effects, and scroll progress indicator

## Tech stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS (`@emailjs/browser`)
- React Icons
- React Intersection Observer

## Local setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal to view the app locally.

## EmailJS contact form

This project uses EmailJS for the contact form in `src/sections/Contact.jsx`.

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and a template
3. Add the following values to a local `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

4. Restart the Vite server after updating `.env`

> Note: `.env` is ignored by Git, but `.env.example` is included as a reference.

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production assets
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint on the project

## Notes

Images and project files are located under `src/assets` and `src/data`.

Replace placeholder `live` links in `src/data/projects.js` with deployed URLs when ready.
