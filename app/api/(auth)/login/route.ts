import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { findUser } from "../../../../lib/services/user-service";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = await body;
  const result = await findUser(email, password);

  if (result) {
    return Response.json({
      success: true,
      message: "Login Successful",
    });
  } else {
    return Response.json({
      success: false,
      message: "Login Failed",
    });
  }
}
