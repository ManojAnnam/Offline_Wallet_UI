import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent, HomeComponent,QrCodeGeneratorComponent, QrScannerDecoderComponent } from './components';

const routes: Routes = [

  { path: '', component: HomeComponent }, // , canActivate: [AuthGuard]
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'QrCodeGenerator', component: QrCodeGeneratorComponent },
  { path: 'Qrscannerdecoder', component: QrScannerDecoderComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
