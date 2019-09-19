import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada-component',
  templateUrl: './caixa-de-entrada-component.component.html',
  styleUrls: ['./caixa-de-entrada-component.component.css']
})
export class CaixaDeEntradaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = 'cmail';
  private isNewEmailFormOpen = false;

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  emailList = [];
  get getIsNewEmailFormOpen() {
    return this.isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this.isNewEmailFormOpen = !this.getIsNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) return;
    this.emailList.push(this.email)
    this.email = { destinatario: '', assunto: '', conteudo: '' }
    formEmail.reset()
  }



}
