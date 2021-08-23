import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

const routes: Routes = [
  {path : 'Login', component : LoginComponent},
  {path : 'Products', component : ProductsComponent},
  {path : 'Orders', component : MyOrderComponent},
  {path : 'shopping-cart', component : ShoppingCartComponent},
  {path : 'admin/orders', component : AdminOrdersComponent},
  {path : 'admin/products', component : AdminProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
