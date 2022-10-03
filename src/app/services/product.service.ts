import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Product} from "src/app/models/products";
import {ErrorService} from "src/app/services/error.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ) {
  }

  products: Product[] = []

  getAll() :Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError( () => error.message)
  }

}
