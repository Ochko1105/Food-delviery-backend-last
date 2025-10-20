import bcrypt from "bcryptjs";
import { createUser, getUsers } from "../../../../lib/services/user-service";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const Hashpassword = bcrypt.hashSync(body.password, 10);
  const compare = bcrypt.compareSync(Hashpassword, body.password);

  const result2 = await createUser(body.email, body.password, "USER");
  console.log({ result2 });

  if (result2) {
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
