import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { FormsModule } from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PreBookingComponent } from './pre-booking/pre-booking.component';
import { BookedComponent } from './booked/booked.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    RegisterUserComponent,
    ContactComponent,
    MenupageComponent,
    DeliveryComponent,
    PaymentConfirmationComponent,
    PreBookingComponent,
    BookedComponent
    

 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
