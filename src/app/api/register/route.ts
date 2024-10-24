import { connectToDB } from "@/lib/connectToDb";
import { userModel } from "@/schemas/register";
import { UserProps } from "@/types";
import { NextResponse } from "next/server";
import bcrupt from "bcrypt";

export const POST = async (req: Request) => {
  await connectToDB();

  try {
    const user: UserProps = await req.json();
    const { email, password } = user;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return NextResponse.json({
        status: 400,
        message: "User already exists",
      });
    } else {
      const hashPassword = await bcrupt.hash(password, 10);
      const created = await userModel.create({
        ...user,
        password: hashPassword,
      });
      return NextResponse.json({
        status: 201,
        message: "User registered successfully",
        data: created,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: "An error occurred",
      error: error.message,
    });
  }
};
