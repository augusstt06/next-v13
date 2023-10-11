import prisma from "@/app/lib/prisma";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });
}
