import { NextRequest, NextResponse } from "next/server";
import { hasSupabaseServerConfig, supabaseAdmin } from "../../../lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const email = String(payload?.email ?? "").trim().toLowerCase();
    const password = String(payload?.password ?? "");

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    if (hasSupabaseServerConfig && supabaseAdmin) {
      const { data, error } = await supabaseAdmin.auth.signInWithPassword({ email, password });

      if (error || !data.session) {
        return NextResponse.json({ error: error?.message ?? "Invalid email or password." }, { status: 401 });
      }

      const response = NextResponse.json({ success: true, message: "Logged in successfully." }, { status: 200 });
      response.cookies.set("discipleship_session", data.session.access_token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return response;
    }

    if (email === "grace@example.com" && password === "password123") {
      const response = NextResponse.json({ success: true, message: "Logged in successfully." }, { status: 200 });
      response.cookies.set("discipleship_session", "demo-admin", {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return response;
    }

    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Something went wrong while logging in." }, { status: 500 });
  }
}
