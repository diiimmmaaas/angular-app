import { Component } from '@angular/core';
import {Product} from "src/app/models/products";
import {products as data} from "src/app/data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  products: Product[] = data
}
