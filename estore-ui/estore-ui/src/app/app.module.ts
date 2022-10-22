import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { ProductDetailCustomerComponent } from './product-detail-customer/product-detail-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    SignupComponent,
    LoginComponent,
    AboutPageComponent,
    ProductListsComponent,
    ProductDetailComponent,
    AddProductPageComponent,
    CustomerViewComponent,
    ProductDetailCustomerComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }