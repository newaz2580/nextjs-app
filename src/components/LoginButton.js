"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <button
          onClick={() => signOut()}
          className="btn btn-sm btn-outline btn-warning"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="btn btn-sm btn-primary"
        >
          Login
        </button>
      )}
    </>
  )
}
