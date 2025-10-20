import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { findUser } from "../../../../lib/services/user-service";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = await body;
  const result = await findUser(email, password);
  console.log({ result });
  if (result) {
    return NextResponse.json({
      success: true,
      message: "Login Successful",
    });
  } else {
    return NextResponse.json({
      success: false,
      message: "Login Failed",
    });
  }
}

// export async function POST(request: NextRequest) {
//   const dataJson = request.json();
//   const { email, password } = await dataJson;
//   const result = await loginUser(email, password);
//   if (result) {
//     return NextResponse.json({
//       success: true,
//       message: "Login Successful",
//     });
//   } else {
//     return NextResponse.json({
//       success: false,
//       message: "Login Failed",
//     });
//   }
// }
