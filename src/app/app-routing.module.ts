import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PreBookingComponent } from './pre-booking/pre-booking.component';
import { BookedComponent } from './booked/booked.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'contact',component:ContactComponent},
  {path:'Payment-Confirmation',component:PaymentConfirmationComponent},
  {path:'pre-booking',component:PreBookingComponent},
  {path:'booked',component:BookedComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
