import { NextRequest, NextResponse } from "next/server";

import { FoodType } from "../../../lib/utils/types";
import { uploadImageToCloudinary } from "../../../lib/utils/uploadimage";
import {
  CreatDishesinfo,
  getAllDishesinfo,
} from "../../../lib/services/category-service";

export async function GET() {
  const Dishes = await getAllDishesinfo();

  return new NextResponse(JSON.stringify({ data: Dishes }), {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const ingredients = formData.get("ingredients") as string;
    const price = formData.get("price") as string;

    const image = formData.get("image") as File;
    const categorid = formData.get("categorid") as string;

    if (!name || !ingredients || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

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

    await CreatDishesinfo(foodData);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Food item received and image uploaded successfully",
        data: foodData,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing food data:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process food data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 501 }
    );
  }
}
