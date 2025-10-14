import { NextResponse } from "next/server";
import {
  getAllDishesinfo,
  getAllDishesinfobyid,
} from "../../../lib/services/category-service";

export async function POST(req: NextResponse) {
  const body = await req.json();

  const Dishes = await getAllDishesinfobyid(body.name);
  console.log({ Dishes });
  return new NextResponse(JSON.stringify({ data: Dishes }), {
    status: 200,
  });
}
