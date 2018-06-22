import { Product } from './Product';

export class Drink extends Product {
  constructor(name: string, price: number, public volume: string) {
    super(name, price);
  }
}
