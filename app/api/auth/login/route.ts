import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

import users from "@/data/users.json";

const MAX_AGE = 60 * 60 * 24 * 30; //days

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  // finding user by email
  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    return NextResponse.json(
      {
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  }

  const secret = process.env.JWT_SECRET || "";
  const token = sign(
    {
      email,
    },
    secret,
    {
      expiresIn: MAX_AGE,
    }
  );

  const seralized = serialize("OutSiteJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  const response = {
    message: "Successfully Logged in!",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": seralized },
  });
}
