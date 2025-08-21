"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-6">Login</h1>
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 bg-blue-500 text-white rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
