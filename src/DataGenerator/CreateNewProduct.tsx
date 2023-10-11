import { faker } from '@faker-js/faker';
import { Product } from '../Models/Product';

export function 
    CreateNewProduct(brand : string, minPrice : number, maxPrice : number, rating : number): Product {
    const originalPrice = faker.commerce.price(minPrice, maxPrice);
    return {
        _id: faker.datatype.uuid(),
        name : faker.commerce.productName(),
        brand : brand,
        originalPrice : originalPrice,
        discountedPrice : Math.min(parseFloat(originalPrice), Math.max(300, parseFloat(originalPrice) - Math.floor((Math.random() * 100) + 1))),
        rating : rating,
        reviews : Math.floor((Math.random() * 100) + 1),
        imageUrl : faker.image.fashion(180,250,true)
  };
}

