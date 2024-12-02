import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutModalComponent } from 'src/app/cart/checkout-modal/checkout-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = "http://localhost:4200" + "/cart"; // For local use
  private apiCheckoutUrl = "http://localhost:4200" + "/checkout" // For local use
  // private apiUrl = environment.apiUrl + "/cart"; // For use of external API
  // private apiCheckoutUrl = environment.apiUrl + "/checkout" // For use of external API

  private cartItems: Product[] = []; // For local use

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getCartItems():Observable<Product[]>{
    // return this.http.get<Product[]>(this.apiUrl); // For use of external API

    // For local use
    const cart = localStorage.getItem('cart');
    if (cart) {
        this.cartItems = JSON.parse(cart);
    } else {
        this.cartItems = [];
    }
    return of(this.cartItems);
  }

  addToCard(product: Product): Observable<Product>{
    // return this.http.post<Product>(this.apiUrl, product); // For use of external API

    // For local use
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    return of(product);
  }

  clearCart(): Observable<void>{
    // return this.http.delete<void>(this.apiUrl) // For use of external API

    // For local use
    this.cartItems = [];
    localStorage.removeItem('cart');
    window.location.reload();
    return of();
  }

  checkOut(products: Product[]): Observable<void>{
    // return this.http.post<void>(this.apiCheckoutUrl, products); // For use of external API

    // For local use
    localStorage.removeItem('cart');
    this.dialog.open(CheckoutModalComponent);
    return of();
  }
}
