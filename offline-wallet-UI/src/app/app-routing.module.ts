import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent, HomeComponent,QrCodeGeneratorComponent } from './components';

const routes: Routes = [

  { path: '', component: HomeComponent }, // , canActivate: [AuthGuard]
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'QrCodeGenerator', component: QrCodeGeneratorComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
