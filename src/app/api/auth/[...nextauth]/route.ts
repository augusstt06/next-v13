import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import NaverProvider from "next-auth/providers/naver";

export const authOption: NextAuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
