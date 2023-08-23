import { getAllProducts } from "@/services/producs"

export default function handler(req, res) {
    if(req.method === "GET"){
   const {products} = getAllProducts();
        res.status(200).json(products)
    }
  }
  