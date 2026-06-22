# Elot Godsplan Portfolio

React, Vite, Tailwind CSS, Motion, and React Three Fiber portfolio site.

## Local Development

```bash
npm ci
npm run dev
```

## Production Build

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Vercel Deployment

This repo includes `vercel.json` for Vercel:

- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite fallback to `index.html`
- Long-term cache headers for `/assets/*` and `/models/*`

In Vercel, import the repository and keep the framework preset as Vite. Add these optional environment variables if you want to manage EmailJS from the dashboard:

```bash
VITE_EMAILJS_SERVICE_ID=service_qllkveo
VITE_EMAILJS_TEMPLATE_ID=template_42ocnbb
VITE_EMAILJS_PUBLIC_KEY=gCERnudKpJVh9LScn
```

The app has fallback values for those variables, so deployment still builds if they are not configured.
