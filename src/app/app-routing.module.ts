import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeregistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistationComponent } from './event-registation/event-registation.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const routes: Routes = [
 
  {path:"", component: DashboardComponent, children:[
    {path:"calculator", component: CalculatorComponent},
    {path:"interpolation", component: InterpolationComponent},
    {path:"event-binding", component: EventBindingComponent},
    {path:"twowaybinding", component: TwowaybindingComponent},
    {path:"rectangle", component: RectangleComponent},
    {path:"square", component: SquareComponent},
    {path:"power", component: PowerComponent},
    {path:"event-registation", component: EventRegistationComponent},
    {path:"employee-registration", component:EmployeeregistrationComponent},
    {path:"cart", component: CartComponent},
    {path:"pipes", component: PipesComponent},
    {path:"cars", component: CarsComponent},
    {path:"star", component: StarComponent},
    {path:"gpay", component: GpayComponent},
    {path:"bank", component:BankComponent}
  ]},  //Default Route - Initial Component load
  {path:"login", component: LoginComponent},
  {path:"**", component: PagenotfoundComponent},  //WildCard Rout
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
