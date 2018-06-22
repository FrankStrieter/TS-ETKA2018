import { Product } from './models/product';
import { Drink } from './models/drink';
import { Dish } from './models/dish';
import { ProductsService } from './services/products-service';

export function main() {
  console.log('main');
  const childElement: HTMLElement = document.createElement('div');
  childElement.innerHTML = `
    <b>Item: ${drinksService.items[0].name}</b>
    <b>Price: ${drinksService.items[0].price}</b>
    `;
  document.body.appendChild(childElement);
}
let product: Product = new Product('Beer', 2.0);
let drink: Drink = new Drink('beer', 2.0, '0.5l');
let dish1: Dish = new Dish('pizza', 9.0);
console.log(dish1.size);

let products: Product[] = [];

const drinksService = new ProductsService<Drink>();
const dishesService = new ProductsService<Dish>();
// let addProduct: (n: Product) => void;

drinksService.addProduct(drink);
dishesService.addProduct(dish1);

drinksService.items[0].price = 2.5;
drinksService.items[0].price = -2.5;

Promise.all([drinksService.getAll(), dishesService.getAll()]).then(
  (result: [Drink[], Dish[]]) => {
    console.log(result[0]);
    console.log(result[1]);
  }
);

console.log(drinksService.items[0].price);
console.log(products);
