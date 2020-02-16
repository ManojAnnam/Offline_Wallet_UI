import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { LoginComponent, RegisterComponent, HomeComponent, QrCodeGeneratorComponent, PaymentComponent } from './components';
import {  } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QrCodeGeneratorComponent,
    HomeComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
