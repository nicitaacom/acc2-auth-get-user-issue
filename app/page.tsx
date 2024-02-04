import { LoginForm } from "./components/LoginForm"
import supabaseClient from "./libs/supabase/supabaseClient"

export default async function Home() {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser()
  console.log(12, "user - ", user)

  return (
    <>
      <LoginForm />
      {JSON.stringify(user)}
    </>
  )
}
