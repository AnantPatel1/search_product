export type Rating = 1 | 2 | 3 | 4 | 5;
export type Brand = "HM" | "Mango" | "All";

export class Product {
    _id: string;
    name : string;
    brand: string;
    originalPrice : string;
    discountedPrice : number;
    rating : number;
    reviews : number;
    imageUrl : string;
    constructor(_id : string, name : string, brand : string, originalPrice : string, 
        discountedPrice : number, rating : number, reviews : number, imageUrl : string) 
    {
        this._id = _id;
        this.name = name;
        this.brand = brand;
        this.originalPrice = originalPrice;
        this.discountedPrice = discountedPrice;
        this.rating = rating;
        this.reviews = reviews;
        this.imageUrl = imageUrl;

    }
}