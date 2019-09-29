import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {


  login = { email: '', password: '' }
  mensagemErro: any;

  constructor(private loginService: LoginServiceService,
    private roteador: Router) { }


  ngOnInit() {
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.loginService.logar(this.login)
        .subscribe((res) => {
          console.log(`A resposta`, res)
          this.roteador.navigate(['/inbox'])
        },
          (responseError: HttpErrorResponse) => {

            this.mensagemErro = responseError.error.body.errors.body;
          })
    }

  }
}