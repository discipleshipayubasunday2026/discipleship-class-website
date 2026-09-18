import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const hasSupabaseServerConfig = Boolean(supabaseUrl && supabaseServiceRoleKey);

export const supabaseAdmin = hasSupabaseServerConfig
  ? createClient(supabaseUrl as string, supabaseServiceRoleKey as string, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null;
