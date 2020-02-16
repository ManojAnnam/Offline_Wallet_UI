import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { LoginComponent, RegisterComponent, QrCodeGeneratorComponent,QrScannerDecoderComponent } from './components';
import {  } from './services';
import { HomeComponent } from './components/home/home.component';
import { NgQrScannerModule } from 'angular2-qrscanner';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QrCodeGeneratorComponent,
    QrScannerDecoderComponent,
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
