import fs from "fs"
import path from "path"
import bcrypt from "bcrypt"

const filePath = path.join(process.cwd(), "src", "dataBase", "user.json");


export function getAllUser(){
const users = fs.readFileSync(filePath);
return JSON.parse(users);
}

export function getByEmail(email){
    const users = getAllUser();
    return users.find((user) => user.email === email);
}

export async function varifyPassword(password, hashPassword){
const isValid = await bcrypt.compare(password, hashPassword);
return isValid;
}

export async function registerUser (email,password, fullName){
    const users = getAllUser();
    const found = getByEmail(email);
   if(found) {
    throw new Error("User exist");
   }
   const hashPassword = await bcrypt.hash(password, 12);
   users.push({id: users.length + 1, email,password : hashPassword, fullName});
   fs.writeFileSync(filePath,JSON.stringify(users));
   return {email}
}