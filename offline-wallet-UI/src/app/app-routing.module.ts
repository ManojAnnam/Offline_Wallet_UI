import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';
import { QrScannerDecoderComponent } from './components/qr-scanner-decoder/qr-scanner-decoder.component';
import { PymentCompleteComponent } from './components/PymentComplete/PymentComplete.component';


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
