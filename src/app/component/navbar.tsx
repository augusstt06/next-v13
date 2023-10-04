"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <div>
      <Link href={"/"}>Home</Link>

      <div>
        {session?.user ? (
          <>
            <Image src={session.user.image} alt={"image"} />
            <p>{session.user.email}</p>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </div>
    </div>
  );
}
