import Form from "@/components/form";
import {signIn} from "next-auth/react"
import { useRouter } from "next/router";
import { getSession } from "next-auth/react"

export default function signUp({setName}){
    const router = useRouter();

    const onSingIn = async (email,password) => {
     try{
    const data = await signIn("credentials",{redirect:false,email,password})
    console.log(data)
    if(data.ok) {
        router.replace("/products");
    } 
    }
     catch(err){
     console.log(err.message);
    }


    }
    return(<div>
        <Form signIn onFormSubmit={onSingIn}></Form>
    </div>)
}


// export async function getServerSideProps({req}){
//     const session = await getSession({req});
//     if(session){
//         return{
//             redirect:{
//                 destination:"/profile",
//                 permenent:false
//             }
//         }
    
//     }

//     return {
//         props:{
//             session
//         }
//     }
// }