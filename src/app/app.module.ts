import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SignupComponent } from './signup/signup.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { ConfirmAfterRequestComponent } from './confirm-after-request/confirm-after-request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BootomNavComponent } from './dashboard/bootom-nav/bootom-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoanRequestComponent,
    ConfirmAfterRequestComponent,
    DashboardComponent,
    BootomNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
