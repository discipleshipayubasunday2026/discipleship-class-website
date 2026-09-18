This is a [Next.js](https://nextjs.org) project for a discipleship-focused website with authentication, lesson pages, FAQs, question submission, and dashboard views.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the site locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Login

The app supports a local demo login for quick testing:

- Email: `grace@example.com`
- Password: `password123`

## Production Deployment

### Option 1: Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import the repo.
3. Set the framework to Next.js.
4. Add environment variables in Vercel:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

5. Deploy the app.

### Option 2: Deploy manually to another host

Build the app:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## GitHub handoff commands

If Git is installed on your machine, run these commands:

```bash
git init
git add .
git commit -m "Initial discipleship class website"
git branch -M main
git remote add origin https://github.com/<your-username>/discipleship-class-website.git
git push -u origin main
```

> This environment does not currently have Git installed, so the repo creation and push cannot be completed from here.

## Real Supabase setup

To connect to a live Supabase backend, create a local `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Then run the SQL from `supabase/schema.sql` in the Supabase SQL editor.

## Project structure

- `app/` — pages and route handlers
- `components/` — reusable UI components
- `lib/` — data and Supabase helpers
- `supabase/` — database schema for app data
- `public/` — static assets

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
