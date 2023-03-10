import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutPageComponent } from './about-page/about-page.component';

import { HomePageComponent } from './home-page/home-page.component';
import { OrderConfirmationPageComponent } from './order-confirmation-page/order-confirmation-page.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';

import { ProductDetailCustomerComponent } from './product-detail-customer/product-detail-customer.component';
import { CustomerViewComponent } from './customer-view/customer-view.component'

import { ProductListsComponent } from './product-lists/product-lists.component';
import { AddReviewPageComponent } from './add-review-page/add-review-page.component';



export const routes: Routes = [
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'login', component:LoginComponent},
  {path: 'about', component:AboutPageComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'detail/:id',component:ProductDetailComponent},
  {path: 'newProduct',component:AddProductPageComponent},
  {path: 'customer/:id',component:ProductDetailCustomerComponent},
  {path: '', component:HomePageComponent},
  {path: 'orderconfirmed', component:OrderConfirmationPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'detail/:id', component:ProductDetailComponent},
  {path: 'newProduct', component:AddProductPageComponent},
  {path: 'adminView', component:ProductListsComponent},
  {path: 'customerView',component:CustomerViewComponent},
  {path: 'addRating/:id',component:AddReviewPageComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
