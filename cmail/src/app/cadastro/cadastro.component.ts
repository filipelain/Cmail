import { HttpResponseBase, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, map } from "rxjs/operators";
import { User } from '../modelo/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  mensagensErro: any;

  constructor(private httpClient: HttpClient, private roteador: Router) { }

  ngOnInit() { }


  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone:	new	FormControl('',	[Validators.required]),
    avatar: new FormControl('', [Validators.required],
      this.validaImagem.bind(this))
  })


  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient.head(
      campoDoFormulario.value,
      {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true }
        }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      )
  }



  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      const userData = new User(this.formCadastro.value);

      this.httpClient.post('http://localhost:3200/users', userData).subscribe((response) => {
        console.log(`Cadastrado	com	sucesso`); this.formCadastro.reset()
        setTimeout(() => { this.roteador.navigate(['']); }, 1000);
      }, (responseError: HttpErrorResponse) => {
        //resposta	caso	existam	erros!							
        this.mensagensErro = responseError.error.body
      })


    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }


  }

  validarTodosOsCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({
        onlySelf: true
      });
    });
    this.handlerError();
  }

  nome = "";
  username = "";
  imagem = ""
  private handlerError() {
    this.nome = this.validaNome('nome');
    this.username = this.validaUserName('username');
    this.imagem = this.validaAvatar('avatar');
  }

  private validaUserName(campo) {
    let nome = "Campo";
    if (this.formCadastro.get(campo).getError('required')) {
      nome += " é obrigatorio";
    }
    return nome;
  }

  private validaNome(campo) {
    let nome = "Campo";
    if (this.formCadastro.get(campo).getError('required')) {
      nome += " é obrigatorio";
    }
    if (this.formCadastro.get(campo).getError('min')) {
      nome += " No minimo 2 caracteres ";
    }
    if (this.formCadastro.get(campo).getError('max')) {
      nome += "  no maximo 12";
    }

    return nome;
  }

  private validaAvatar(camo) {
    let imagem = " "
    if (this.formCadastro.get('avatar').status === 'PENDING') {
      imagem = "Validação	pendente...."
    }
    if (this.formCadastro.get('avatar').status === 'VALID') {
      imagem = "URL	Válida	ᚊ"
    }
    if (this.formCadastro.get('avatar').hasError('urlInvalida')) {
      imagem = "Erro	na	URL	informada	ᚭ";
    }
    return imagem;
  }


}
