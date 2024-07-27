import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = environment.apiUrl + " /cart";

  constructor(private http: HttpClient) { }

  getCartItems():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  addToCard(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }

  clearCart(): Observable<void>{
    return this.http.delete<void>(this.apiUrl)
  }
}
