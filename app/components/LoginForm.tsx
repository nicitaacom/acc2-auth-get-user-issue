"use client"

import supabaseClient from "@/libs/supabase/supabaseClient"
import { useState } from "react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function login(e: React.FormEvent) {
    e.preventDefault()
    await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    })
  }
  async function register() {
    await supabaseClient.auth.signUp({
      email: email,
      password: password,
    })
  }

  return (
    <form onSubmit={login}>
      <input
        className="px-4 py-2 bg-foreground border rounded "
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="px-4 py-2 bg-foreground border rounded"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button className="px-4 py-2" type="submit">
        Login
      </button>
      <button className="px-4 py-2" onClick={register}>
        Register
      </button>
    </form>
  )
}
