import { log } from '../utils/log.decorator';

export class ProductsService<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  @log
  addProduct(newProduct: T | T[]): T | T[] {
    if (Array.isArray(newProduct)) {
      this.items.push(...newProduct);
    } else {
      this.items.push(newProduct);
    }
    return newProduct;
  }

  getAll(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      return setTimeout(() => resolve(this.items), 1000);
    });
  }

  async getAllAsync() {
    return await this.getAll();
  }
}
