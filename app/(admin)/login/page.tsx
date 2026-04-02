"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin =(e: any) => {
        e.preventDefault();
        if (email === "admin@gmail.com" && password === "123456") {
            // set cookie
            document.cookie = "isAdmin=true; path=/; max-age=3600"; // 1 hour
    //   localStorage.setItem("isAdmin", "true");
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
    }

    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-black">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">

        <h1 className="text-2xl font-bold text-center">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-red-400 hover:bg-red-600 text-white py-3 rounded-lg">
            Login
          </button>

        </form>

      </div>
    </div>
  );

}