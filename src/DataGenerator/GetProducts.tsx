import { Product } from "../Models/Product";
import { CreateNewProduct } from "./CreateNewProduct";

export function 
    GetProducts(brand : string, minPrice : number, maxPrice : number, rating : number) : Product[] {
    let products : Product[] = [];
    [...Array(10)].forEach(() => {
        let product = CreateNewProduct(brand,minPrice,maxPrice,rating);
        products.push(product);
    })
    return products;
}