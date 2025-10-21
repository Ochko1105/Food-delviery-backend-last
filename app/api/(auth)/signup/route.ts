import bcrypt from "bcryptjs";
import { createUser, getUsers } from "../../../../lib/services/user-service";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const Hashpassword = bcrypt.hashSync(body.password, 10);

  const result2 = await createUser(body.email, Hashpassword, "USER");

  if (result2) {
    return Response.json({
      success: true,
      message: "Login Successful",
    });
  } else {
    return Response.json({
      success: false,
      message: "Login Failed No email is here",
    });
  }
}
