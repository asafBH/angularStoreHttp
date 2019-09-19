import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './views/products/products.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { CartViewComponent } from './views/cart-view/cart-view.component';
import { UserLogComponent } from './views/user-log/user-log.component';
import { AddProductComponent } from './views/add-product/add-product.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FormGuardService } from './services/form-guard.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



const routes: Routes = [
  {
    path: 'products/:catId',
    component: ProductsComponent,

  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'product/:catId/:title',
    component: ProductViewComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'About' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Contact' }
  },
  {
    path: 'cart',
    component: CartViewComponent,
    canActivate: [AuthGuardService],
    children: [{
      path: ':id/:title',
      component: ProductDetailsComponent,
    }],
    data: { animation: 'Contact' }
  },
  {
    path: 'login',
    component: UserLogComponent,
    data: { animation: 'Contact' }
  },
  {
    path: 'addProduct',
    component: AddProductComponent,
    canDeactivate: [FormGuardService],
    data: { animation: 'Contact' }
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

