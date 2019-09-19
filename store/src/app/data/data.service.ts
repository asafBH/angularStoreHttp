import { Injectable } from '@angular/core';
import { IAddProduct } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productData$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.productData$ = new BehaviorSubject<any>({ category: [] });
    this.http.get('/assets/data.json').toPromise().then(
      (res: any[]) => {
        // Success
        this.productData$.next(res);
      }
    );
  }

  getProductsByCategoryId(id: string) {
    return this.productData$.pipe(
      map(pdata => (pdata.category.filter(cat => cat.Id === id)[0].Products))
    );
  }

  getProductByTitleAndCat(id: string, title: string) {
    return this.productData$.pipe(
      map(pdata => (pdata.category.filter(cat => cat.Id === id)[0].Products.filter(pr => pr.Title === title)[0]))
    );

  }

  getCategories() {
    return this.productData$.pipe(
      map(pdata => (pdata.category.map(cat => {
        return {
          Id: cat.Id,
          Title: cat.Title
        };
      }))
      )
    );

  }

  addProduct(product: IAddProduct) {
    let categoryFound = false;
    (this.productData$ as any).value.category.forEach((cat, index) => {
      if (cat.Title === product.category) {
        cat.Products.push({
          CategoryId: (index + 1).toString(),
          Image: product.image,
          Title: product.title,
          Price: product.price,
          Description: product.description
        });
        categoryFound = true;
      }
    });

    if (!categoryFound) {
      const newIndex = (this.productData$ as any).value.category.length + 1;
      (this.productData$ as any).value.category.push({
        Id: newIndex.toString(),
        Title: product.category,
        Products: [
          {
            CategoryId: newIndex.toString(),
            Image: product.image,
            Title: product.title,
            Price: product.price,
            Description: product.description
          }
        ]
      });
    }
    this.productData$.next(this.productData$.value);
    return of(true);
  }
}
