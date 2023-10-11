import prisma from "@/app/lib/prisma";

interface RequestBody {
  username: string;
  password: string;
}
export async function Post(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user && user.password === body.password) {
    const { password, ...userWithoutPass } = user;
    return new Response(JSON.stringify(userWithoutPass));
  } else return new Response(JSON.stringify(null));
}
