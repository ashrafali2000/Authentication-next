import fs from "fs"
import path from "path"
const filePath = path.join(process.cwd(), "src", "dataBase", "products.json");

export function getAllProducts(){
    const products = fs.readFileSync(filePath);
    return JSON.parse(products);
    }