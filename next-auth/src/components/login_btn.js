import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
export default function Login_Btn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <button onClick={() => signOut()} className="shadow-md py-2 px-6  bg-bermuda rounded-full  text-white cursor-pointer font-semibold hover:opacity-70">Sign out</button>
      </>
    )
  }
  return (
    <>
      {/* Not signed in <br /> */}
   <Link href={"/auth/signIn"}  className="shadow-md py-2 px-6  bg-indigo-600 rounded-full  text-white cursor-pointer font-semibold hover:opacity-70"> Sign in</Link>  
    </>
  )
}