# Supabase setup guide

This project already includes Supabase clients and a schema file. To connect it to a real Supabase project:

1. Create a project in Supabase.
2. Open the SQL editor and run the SQL from `supabase/schema.sql`.
3. Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. Restart the app.
5. If a Supabase env var is missing, the app will remain in demo mode automatically.

## Notes
- The app is designed to prefer live Supabase auth when credentials exist.
- In the absence of credentials, demo login is still enabled for local development.
- The schema includes profiles, questions, and messages tables with basic RLS policies.
