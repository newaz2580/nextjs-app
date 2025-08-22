"use client"

import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/products") 
    }
  }, [session])

  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button
        onClick={() => signIn("google")}
        className="btn btn-primary"
      >
        Login with Google
      </button>
    </div>
  )
}
