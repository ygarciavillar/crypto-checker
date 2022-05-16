import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CryptoModule } from './crypto/crypto.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { httpInterceptorsProviders } from './core/interceptors';
import { BusyComponent } from './shared/busy/busy.component';

@NgModule({
  declarations: [
    AppComponent,
    BusyComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CryptoModule
  ],
  providers: [httpInterceptorsProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
