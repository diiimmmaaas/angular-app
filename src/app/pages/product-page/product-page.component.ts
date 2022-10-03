import { Component, OnInit } from '@angular/core';
import {ProductService} from "src/app/services/product.service";
import {ModalService} from "src/app/services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  title = 'angular-app';
  loading = false
  term: ''

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(products => {
      this.loading = false
    })
  }

}
