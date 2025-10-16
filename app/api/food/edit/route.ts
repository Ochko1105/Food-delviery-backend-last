import { NextRequest, NextResponse } from "next/server";
import { uploadImageToCloudinary } from "../../../../lib/utils/uploadimage";
import { FoodType } from "../../../../lib/utils/types";
import {
  EditDishesinfo,
  getAllDishesinfo,
} from "../../../../lib/services/category-service";
export async function GET() {
  const Dishes = await getAllDishesinfo();

  return new NextResponse(JSON.stringify({ data: Dishes }), {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const ingredients = formData.get("ingredients") as string;
  const price = formData.get("price") as string;
  const foodid = formData.get("foodid") as string;
  const image = formData.get("image") as File;
  const categorid = formData.get("categorid") as string;

  let imageUrl = "";

  if (image) {
    imageUrl = await uploadImageToCloudinary(image);
  }

  const foodData: FoodType = {
    categorid,
    name,
    ingredients,
    price: parseFloat(price),
    image: imageUrl,
  };

  await EditDishesinfo(foodData, foodid);

  return NextResponse.json(
    {
      data: foodData,
    },
    { status: 201 }
  );
}
