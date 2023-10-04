"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <div>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
