import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'home1', component:Home1Component},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'AboutUS', component:AboutUSComponent},
  {path:'order',component:OrderPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
