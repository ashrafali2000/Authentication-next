import { getByEmail,varifyPassword } from "@/services/user";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session:{
        jwt:true
    },
    providers:[
        CredentialsProvider({
            name :"Credentials",
            async authorize ({email,password}){
                const user = getByEmail(email);
                if(!user){
                    throw new Error("user does not exist");
                }
                const isValid = await varifyPassword(password,user.password)
                if(!isValid){
                  throw new Error("Incorrect password")
                }
               return {email}
            }
         })
    ]
}
export default NextAuth(authOptions)