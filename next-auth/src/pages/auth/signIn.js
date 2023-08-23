import Form from "@/components/form";
import {signIn} from "next-auth/react"
import { useRouter } from "next/router";
export default function signUp({setName}){
    const router = useRouter();

    const onSingIn = async (email,password) => {
     try{
    const data = await signIn("credentials",{redirect:false,email,password})
    console.log(data)
    if(data.ok) {
        // setName(data.fullName);
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