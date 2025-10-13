import { NextRequest, NextResponse } from "next/server";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from "../../../../lib/services/category-service";

export async function GET() {
  const categories = await getAllCategories();
  return new NextResponse(JSON.stringify({ data: categories }), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
 
  const body = await req.json();

  await deleteCategory(body._id)
 

  return new NextResponse(JSON.stringify({ message: "Category Deleted" }), {
    status: 200,
  });
}
