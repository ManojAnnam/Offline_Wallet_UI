import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';

const routes: Routes = [
  { path: 'QrCodeGenerator', component: QrCodeGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
