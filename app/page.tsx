import { LoginForm } from "./components/LoginForm"
import supabaseClient from "./libs/supabase/supabaseClient"
import supabaseServer from "./libs/supabase/supabaseServer"

export default async function Home() {
  const {
    data: { user },
  } = await supabaseServer().auth.getUser()
  console.log(12, "user - ", user)

  return (
    <>
      <LoginForm />
      {JSON.stringify(user)}
    </>
  )
}
