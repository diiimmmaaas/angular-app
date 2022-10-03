import {Component, OnInit} from "@angular/core";
import {ProductService} from "src/app/services/product.service";
import {ModalService} from "src/app/services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  loading = false
  // products$: Observable<Product[]>
  term: ''

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
    ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap( () => this.loading = false)
    // )
    this.productsService.getAll().subscribe(products => {
      this.loading = false
    })
  }
}
