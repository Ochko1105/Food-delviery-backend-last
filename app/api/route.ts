import { NextRequest } from "next/server";

export async function GET() {
  return Response.json({ data: "Hello from Food" });
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { newCategory } = body;
  categories.push(newCategory);
}
// mongodb+srv://Ochko1105mongodb:88786478Vetoo!@cluster0.lfcsfnf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
