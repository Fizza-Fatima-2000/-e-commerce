import { NextFunction, Request, Response } from "express";
import ProductRepository from "../repositories/product.repository";
import Product from "../models/product";
import successHandler from "../utils/SuccessHandler";
import ErrorHandler from "../utils/ErrorHandler";


export class ProductController {
  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
        let product :Product
      const data= req.body;
      const createddata : any ={
        name : data.name,
        description :data.description,
        price : data.price,
        category_id : data.category_id
  
       }
       product = await ProductRepository.create(createddata)
  
          successHandler(
            res,
            201,
            undefined,
            "Product created successfully"
          );
        
      } catch (error: any) {
        console.log(error);
        return next(new ErrorHandler(error, 500));
      }
    }
     
      
     
  }






 

export default new ProductController();
