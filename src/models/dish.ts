import { Product } from './Product';
import { AVAILABLE_SIZES } from './available-sizes.enum';
export class Dish extends Product {
  constructor(
    name,
    price,
    public size: AVAILABLE_SIZES = AVAILABLE_SIZES.MEDUIM
  ) {
    super(name, price);
    // if(!size) {
    //     this.size = AVAILABLE_SIZES.MEDUIM
    // }
  }
}
