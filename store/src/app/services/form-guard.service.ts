import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddProductComponent } from '../views/add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuardService implements CanDeactivate<AddProductComponent> {

  constructor() { }

  canDeactivate(addProduct: AddProductComponent) {
    if (addProduct.addProduct.dirty) {
      return addProduct.canDeactivate();
    }
    else {
      return true;
    }
  }
}