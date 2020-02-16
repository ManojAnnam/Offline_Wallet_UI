import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { LoginComponent, RegisterComponent, QrCodeGeneratorComponent } from './components';
import {  } from './services';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      QrCodeGeneratorComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      NgxQRCodeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
