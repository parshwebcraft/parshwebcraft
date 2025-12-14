import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) { 
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("newsletter")
      .insert([{ email }]);

    if (error) {
      // duplicate email handling
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "You are already subscribed" },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch  {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
