import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { IProduct } from 'src/app/models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public $cartSubject: BehaviorSubject<IProduct[]>;

  constructor(public data: DataService) {
    this.$cartSubject = new BehaviorSubject<IProduct[]>([]);
  }

  //add product from cart
  addToCart(product: IProduct): void {
    const currentCartState = this.$cartSubject.value;
    currentCartState.push(product);
    this.$cartSubject.next(currentCartState);
  }

  //remove product from cart
  removeFromCart(product: IProduct): void {
    const currentCartState = this.$cartSubject.value;
    const productIndex = currentCartState.indexOf(product);
    currentCartState.splice(productIndex, 1);
    this.$cartSubject.next(currentCartState);
  }

  // check cart status for view on page
  cartStatusForView(): Observable<{ product: IProduct, count: number }[]> {
    return this.$cartSubject.pipe(
      map(products => {
        return this.groupProducts(products);
      })
    );
  }

  //group the same products in array 
  groupProducts(products: IProduct[]): { product: IProduct, count: number }[] {
    const groupedArray: { product: IProduct, count: number }[] = [];

    products.forEach(product => {
      if (groupedArray.filter(item => item.product.Title === product.Title).length > 0) {
        groupedArray.forEach(prod => {
          if (prod.product.Title === product.Title) {
            prod.count++;
          }
        })
      } else {
        groupedArray.push({
          product,
          count: 1
        })
      }
    })

    return groupedArray;
  }

  //total value of cart function
  cartTotalValue(): Observable<number> {
    return this.$cartSubject.pipe(
      map(products => {
        return products.reduce((total, prod) => {
          return total + prod.Price;
        }, 0)
      })
    )
  }
}
