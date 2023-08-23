import { registerUser } from "@/services/user";
export default async function handler(req, res) {
    if(req.method !== "POST") {
        res.status(400).send();
    }
    const {email, password, fullName } = req.body;
    try{
        const data = await registerUser(email,password,fullName)
        res.status(201).json(data);

    }catch(err){
     res.status(400).json({message:err.message});
    } 
}