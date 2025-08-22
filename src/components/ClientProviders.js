"use client" // Client Component required for hooks & interactivity

import { SessionProvider } from "next-auth/react"

export default function ClientProviders({ children }) {
  return <SessionProvider>{children}</SessionProvider>
}
