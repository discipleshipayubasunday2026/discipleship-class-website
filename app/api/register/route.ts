import { NextRequest, NextResponse } from "next/server";
import { hasSupabaseServerConfig, supabaseAdmin } from "../../../lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const name = String(payload?.name ?? "").trim();
    const email = String(payload?.email ?? "").trim().toLowerCase();
    const password = String(payload?.password ?? "");

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long." }, { status: 400 });
    }

    if (hasSupabaseServerConfig && supabaseAdmin) {
      const { data, error } = await supabaseAdmin.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
        },
      });

      if (error || !data.user) {
        return NextResponse.json({ error: error?.message ?? "Registration failed." }, { status: 400 });
      }

      const response = NextResponse.json({ success: true, message: "Account created successfully." }, { status: 201 });
      response.cookies.set("discipleship_session", data.user.id, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return response;
    }

    const response = NextResponse.json({ success: true, message: "Account created successfully." }, { status: 201 });
    response.cookies.set("discipleship_session", "demo-admin", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Something went wrong while creating your account." }, { status: 500 });
  }
}
