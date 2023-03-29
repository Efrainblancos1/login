import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutigModule } from './auth-routig.module';




@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutigModule
  ]
})
export class AuthModule { }
