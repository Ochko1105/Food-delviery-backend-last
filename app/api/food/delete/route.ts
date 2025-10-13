import { NextRequest, NextResponse } from "next/server";
import {
  deleteCategory,
  deletefoodinfo,
  getAllCategories,
  getAllDishesinfo,
} from "../../../../lib/services/category-service";

export async function GET() {
  const categories = await getAllDishesinfo();
  return new NextResponse(JSON.stringify({ data: categories }), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  await deletefoodinfo(body._id);

  return new NextResponse(JSON.stringify({ message: "Food info Deleted" }), {
    status: 200,
  });
}
