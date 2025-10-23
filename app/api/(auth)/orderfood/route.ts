import { NextRequest, NextResponse } from "next/server";
import {
  CreateFoodOrder,
  getOrderedFoods,
} from "../../../../lib/services/user-service";
export async function GET() {
  const OrderedFoods = await getOrderedFoods();
  console.log({ OrderedFoods });
  return new NextResponse(JSON.stringify({ data: OrderedFoods }), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const result = await CreateFoodOrder(body);

  if (result) {
    return Response.json({
      success: true,
      message: "Order Successful",
    });
  } else {
    return Response.json({
      success: false,
      message: "Order failed",
    });
  }
}
