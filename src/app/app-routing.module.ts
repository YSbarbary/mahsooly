import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {LoanRequestComponent} from './loan-request/loan-request.component';
import {ConfirmAfterRequestComponent} from './confirm-after-request/confirm-after-request.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'loanreq', component: LoanRequestComponent},
  {path: 'loanreqconfirm', component: ConfirmAfterRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
