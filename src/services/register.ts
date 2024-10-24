import { UserProps } from "@/types";

export const signUp = async (data: UserProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  return response.json();
};
