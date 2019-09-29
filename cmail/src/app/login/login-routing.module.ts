import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';


const rotas: Routes = [{
  path: '',
  component: LoginComponent
}]


@NgModule({
  imports: [RouterModule.forChild(rotas)],
  exports: [RouterModule]

})
export class LoginRoutingModule { }
