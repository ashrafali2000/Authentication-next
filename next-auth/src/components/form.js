import { useRef } from "react"
import Link from "next/link";
import { getSession } from "next-auth/react"
export default function Form({signIn,onFormSubmit}) {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

  const submitHandler = (event) => {
      event.preventDefault();
    if(signIn){
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
     // Validation
     onFormSubmit(email, password);
    }
    
    else{
        const fname = fnameRef.current.value;
        const lname = lnameRef.current.value;
        const fullName = fname+" "+lname;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
     // Validation
     onFormSubmit(email, password, fullName);
    }

    } 

   
  


    return (<div>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {signIn ? <p> Sign in to your account </p> :<p>Sing up to new account</p> }
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>

          {signIn ? "" : 
        <div className="">
          <div>
          <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
          First Name
          </label>
          <div className="mt-2">
            <input
              id="fname"
              name="fname"
              type="text"
              ref={fnameRef}
              autoComplete="fname"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>
          <div>
          <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
           Last Name
          </label>
          <div className="mt-2">
            <input
              id="lname"
              name="lname"
              type="lname"
              ref={lnameRef}
              autoComplete="lname"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
          </div>
        </div>}



            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

     

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <span href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             {signIn ? <Link href = {"/auth/signUp"}>Sign up</Link>: <Link href = {"/auth/signIn"}>Sing In</Link>}
            </span>
          </p>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
             {signIn ? <p>Sign in</p> : <p>Sign up</p>}
              </button>
            </div>
          </form>

        </div>
      </div>
  
    </div>)
}

// export async function getServerSideProps({req}){
//   const session = await getSession({req});
// if(session) {
//       return{
//           redirect:{
//               destination:"/profile",
//               permenent:false
//           }
//       }
//   }
//   return {
//     props:{session}
// }

// }