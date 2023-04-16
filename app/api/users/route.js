import { getUser, createUser } from "@/libs/prisma/users";
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { users, error } = await getUser();
    if (error) throw new Error(error);
    return new Response(JSON.stringify(users), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function POST(Request) {
  try {
    const { email, name, imageUrl } = await Request.json();

    const user = await prisma.user.create({
      data: {
        email,
        name,
        imageUrl,
      },
    });

    return NextResponse.json(Request.json(user));
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err.message), {
      status: 500,
    });
  }
}
