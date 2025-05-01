"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const registerStudent = async (userData: FieldValues) => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const login = async (loginData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const result = res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const getCurretnUser = async () => {
  const token = (await cookies()).get("accesstoken")?.value;

  let decodedData = null;

  if (token) {
    decodedData = jwtDecode(token);
    return decodedData;
  } else {
    return null;
  }
};
