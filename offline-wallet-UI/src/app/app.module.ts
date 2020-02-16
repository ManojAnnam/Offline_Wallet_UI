import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import {FormsModule} from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
   declarations: [
      AppComponent,
      QrCodeGeneratorComponent
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
