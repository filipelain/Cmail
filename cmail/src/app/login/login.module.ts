import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CmailFormModule } from '../cmail-form/cmail-form.module';
import { LoginServiceService } from './login-service.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CmailFormModule
  ],
  providers: [LoginServiceService],
  exports: [LoginRoutingModule]
})
export class LoginModule { }
