import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent, RegisterComponent, HomeComponent, QrCodeGeneratorComponent, PaymentComponent, QrScannerDecoderComponent, PymentCompleteComponent
} from './components';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'new-payment', component: QrCodeGeneratorComponent, canActivate: [AuthGuard] },
  { path: 'accept-payment', component: QrScannerDecoderComponent, canActivate: [AuthGuard] },
  { path: 'PymentComplete', component: PymentCompleteComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
