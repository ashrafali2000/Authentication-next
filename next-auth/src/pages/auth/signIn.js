import Form from "@/components/form";
import {signIn} from "next-auth/react"
import { useRouter } from "next/router";
export default function signUp(){
    const router = useRouter();

    const onSingIn = async (email,password) => {
     try{
    const data = await signIn("credentials",{redirect:false,email,password})
    if(data.ok) {
        router.replace("/profile");
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