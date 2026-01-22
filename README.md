## My-next-js

An animated, typography-forward Next.js landing page with a personalized greeting build with love and patience.

### Highlights

- Cinematic hero load-in (staggered characters + blur → snap)
- Name prompt: user enters a name and the page greets them (e.g. “Hello, Piyush”)
- Name is stored in `localStorage` and can be reset from the UI
- Bengali/combining-character friendly name rendering (grapheme segmentation)

### Tech

- Next.js (App Router)
- Tailwind v4 (via `@import "tailwindcss"`)
- Framer Motion
- Fonts via `next/font/google` (Fraunces, Fragment Mono, Noto Sans Bengali)

## Getting Started

Install deps (first time only):

```bash
npm.cmd install
```

Run the development server:

```bash
npm.cmd run dev
```

If you're not on Windows PowerShell, `npm run dev` also works.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open http://localhost:3000

Start editing:

- Main page: `src/app/page.tsx`
- Hero + name prompt logic: `src/app/components/AnimatedHero.tsx`
- Theme + animations: `src/app/globals.css`

### Name Greeting

1. First visit shows a name input.
2. After submit, the hero title becomes `Hello, <name>`.
3. The name is saved in `localStorage` under the key `my-next-js:name`.
4. Click “Not you? Reset name” to clear it.

### Production Build

```bash
npm.cmd run build
npm.cmd run start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
