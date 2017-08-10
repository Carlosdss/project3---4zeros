import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { SelectionService } from '../services/selection.service';
import { ConfirmationService } from '../services/confirmation.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { LocationComponent } from './selection/location/location.component';
import { ClubComponent } from './selection/club/club.component';
import { TypeComponent } from './selection/type/type.component';
import { AlcoholComponent } from './selection/alcohol/alcohol.component';
import { BrandComponent } from './selection/brand/brand.component';
import { SoftComponent } from './selection/soft/soft.component';
//import { NavbarComponent } from './selection/src/app/selection/navbar/navbar.component';
import { ConfirmationComponent } from './selection/confirmation/confirmation.component';
import { AddOrCheckOutComponent} from './selection/add-or-check-out/add-or-check-out.component';
import { CheckoutComponent } from './selection/checkout/checkout.component';
//import { NavbarComponent } from './navbar/navbar.component';
//import { AddOrCheckOutComponent } from './selection/src/app/selection/add-or-check-out/add-or-check-out.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    SignupFormComponent,
    LocationComponent,
    ClubComponent,
    AlcoholComponent,
    BrandComponent,
    SoftComponent,
    TypeComponent,
    ConfirmationComponent,
    CheckoutComponent,
    AddOrCheckOutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, SelectionService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
