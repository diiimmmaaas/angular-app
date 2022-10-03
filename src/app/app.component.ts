import {Component, OnInit} from "@angular/core";
import {Product} from "src/app/models/products";
import {ProductService} from "src/app/services/product.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  // products: Product[] = []
  loading = false
  products$: Observable<Product[]>

  constructor(private productsService: ProductService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap( () => this.loading = false)
    )
    // this.productsService.getAll().subscribe( (products) => {
    //   this.products = products
    //   this.loading = false
    // } )
  }
}
