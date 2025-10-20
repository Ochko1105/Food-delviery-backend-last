import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";
import { createUser, getUsers } from "../../../../lib/services/user-service";
export async function GET() {
  const User = await getUsers();

  return new NextResponse(JSON.stringify({ data: User }), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const Hashpassword = bcrypt.hashSync(body.password, 1);
  const compare = bcrypt.compareSync(Hashpassword, body.password);
  console.log({ compare });

  await createUser(body.email, body.password, "USER");

  return new NextResponse(JSON.stringify({ message: "User created" }), {
    status: 200,
  });
}
