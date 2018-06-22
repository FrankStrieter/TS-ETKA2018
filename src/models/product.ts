export class Product {
  constructor(public name: string, private _price: number) {}

  set price(newPrice: number) {
    if (newPrice < 0) {
      return;
    } else {
      this._price = newPrice;
    }
  }

  get price() {
    console.log('get Price');
    return this._price;
  }
}
