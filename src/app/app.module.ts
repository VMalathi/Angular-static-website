import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedPagesModule } from './shared-pages/shared-pages.module';
import { PagesModule } from './pages/pages.module';
import { ContactmailService } from './services/contactmail.service';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedPagesModule,
    PagesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [
    ContactmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
