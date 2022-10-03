import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "src/app/models/products";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    return products.filter(p => p.title.includes(search));
  }

}
