import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./Components/home/home-page/home-page.component";
import {LoginComponent} from "./Components/User/login/login.component";
import {CartComponent} from "./Components/User/cart/cart.component";
import {CheckoutComponent} from "./Components/User/checkout/checkout.component";
import {OrderSuccessComponent} from "./Components/User/order-success/order-success.component";
import {AdminComponent} from "./Components/admin/admin-main/admin.component";
import {AdminProductsComponent} from "./Components/admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./Components/admin/admin-orders/admin-orders.component";
import {PageNotFoundComponent} from "./Components/page-not-found/page-not-found.component";


const routes: Routes = [
  /**
   * With reference to navigation bar design on FIGMAI don't think we need a products component for now since
   * it's in the home page component
   * EXCEPT things get nested with an id on the page
   * HENCE; The product page also only takes you to the Home page component
   */
  {path: "", component: HomePageComponent },
  {path: "products", component: HomePageComponent},

  //User Section
  //Eac user needs cart , order history page , a login page and an order-success page
  {path: "login", component: LoginComponent},
  {path: "cart", component: CartComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "order-success", component: OrderSuccessComponent},

  //Administrator Section
  {path: "admin", component: AdminComponent},
  {path: "admin/products", component: AdminProductsComponent},
  {path: "admin/orders", component: AdminOrdersComponent},

  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full',
    component: PageNotFoundComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
LoginComponent,
  CartComponent,
  CheckoutComponent,
  OrderSuccessComponent,
  AdminComponent,
  AdminProductsComponent,
  AdminOrdersComponent,
  PageNotFoundComponent
]



