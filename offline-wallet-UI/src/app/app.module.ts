import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgQrScannerModule } from 'angular2-qrscanner';
import {
  LoginComponent, RegisterComponent, HomeComponent, QrCodeGeneratorComponent, QrScannerDecoderComponent, PaymentComponent,PymentCompleteComponent
} from './components';
import {  } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QrCodeGeneratorComponent,
    QrScannerDecoderComponent,
    PaymentComponent,
    PymentCompleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgQrScannerModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
