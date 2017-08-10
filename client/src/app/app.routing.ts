import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LocationComponent } from './selection/location/location.component';
import { ClubComponent } from './selection/club/club.component';
import { TypeComponent } from './selection/type/type.component';
import { AlcoholComponent } from './selection/alcohol/alcohol.component';
import { BrandComponent } from './selection/brand/brand.component';
import { SoftComponent } from './selection/soft/soft.component';
import {ConfirmationComponent} from './selection/confirmation/confirmation.component';
import {AddOrCheckOutComponent} from './selection/add-or-check-out/add-or-check-out.component';
import {CheckoutComponent} from './selection/checkout/checkout.component';
//import { addOrCheckComponent } from './selection/add-or-check-out/add-or-check-out.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'locations', component: LocationComponent },
  { path: 'clubs', component: ClubComponent },
  { path: 'types', component: TypeComponent },
  { path: 'alcohols', component: AlcoholComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'softs', component: SoftComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'add-or-check-out', component: AddOrCheckOutComponent },
  { path: 'checkout', component: CheckoutComponent }
];
