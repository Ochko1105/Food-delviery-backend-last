import { NextRequest, NextResponse } from "next/server";
import {
  EditStatus,
  getOrderedFoods,
} from "../../../../../lib/services/user-service";
export async function GET() {
  const OrderedFoods = await getOrderedFoods();

  return new NextResponse(JSON.stringify({ data: OrderedFoods }), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log({ body });
  const result = await EditStatus(body._id, body.status);
  console.log({ result });

  return NextResponse.json(
    {
      data: result,
    },
    { status: 201 }
  );
}
