import { connectToDB } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectToDB();
  const formData = await req.formData();
  console.log(formData);
  return NextResponse.json({
    status: 201,
    message: "User register successfully",
    data: formData,
  });
};
