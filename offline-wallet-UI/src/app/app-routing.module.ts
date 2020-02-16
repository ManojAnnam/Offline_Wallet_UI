import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent, RegisterComponent, HomeComponent, QrCodeGeneratorComponent, PaymentComponent, QrScannerDecoderComponent, PymentCompleteComponent
} from './components';


const routes: Routes = [

  { path: '', component: HomeComponent }, // , canActivate: [AuthGuard]
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'new-payment', component: QrCodeGeneratorComponent },
  { path: 'accept-payment', component: QrScannerDecoderComponent },
  { path: 'PymentComplete', component: PymentCompleteComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
