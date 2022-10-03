import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, throwError} from "rxjs";
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

  getAll() :Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError( () => error.message)
  }

}
