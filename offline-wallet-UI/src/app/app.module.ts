import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgQrScannerModule } from 'angular2-qrscanner';
import {
  LoginComponent, RegisterComponent, HomeComponent, QrCodeGeneratorComponent, QrScannerDecoderComponent, PaymentComponent
} from './components';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './services/auth/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QrCodeGeneratorComponent,
    QrScannerDecoderComponent,
    PaymentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgQrScannerModule,
    NgxQRCodeModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
