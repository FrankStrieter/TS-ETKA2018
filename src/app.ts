import { Product } from './models/product';
import { Drink } from './models/drink';
import { Dish } from './models/dish';

let product: Product = new Product('Beer', 2.0);
let drink: Drink = new Drink('beer', 2.0, '0.5l');
let dish1: Dish = new Dish('pizza', 9.0);
console.log(dish1.size);

let products: Product[] = [];

// let addProduct: (n: Product) => void;

function addProduct(newProduct: Product | Product[]): void {
  if (Array.isArray(newProduct)) {
    products.push(...newProduct);
  } else {
    products.push(newProduct);
  }
}

addProduct(drink);
addProduct(product);

console.log(product.price);
console.log(products);
