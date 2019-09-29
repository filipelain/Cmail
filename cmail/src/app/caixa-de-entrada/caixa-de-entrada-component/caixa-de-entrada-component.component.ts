import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/email.service';
import { Email } from 'src/app/modelo/Email';
import { PageService } from 'src/app/page.service';

@Component({
  selector: 'app-caixa-de-entrada-component',
  templateUrl: './caixa-de-entrada-component.component.html',
  styleUrls: ['./caixa-de-entrada-component.component.css']
})
export class CaixaDeEntradaComponentComponent implements OnInit {

  constructor(private emailService: EmailService,private	pageService:	PageService) { }

  ngOnInit() {
    this.emailService.listar().subscribe(lista => {
      this.emailList = lista;
    });
    this.pageService.defineTitulo('Caixa	de	entrada	-	CMail');  
  }

  title = 'cmail';
  private isNewEmailFormOpen = false;

  email: Email = new Email({});

  emailList = [];
  get getIsNewEmailFormOpen() {
    return this.isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this.isNewEmailFormOpen = !this.getIsNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) return;

    this.emailService.enviar(this.email)
      .subscribe(emailApi => {
        console.log(`O email`, emailApi)
        this.emailList.push(emailApi);
        this.email = { destinatario: '', assunto: '', conteudo: '', dataDeEnvio: '', introducaoDoConteudo: '' }
        formEmail.reset();
      }
        , erro => {
          alert(`DEU ERRO, CONSULTE O LOG`)
          console.error(erro)
        });
  }

  handleRemoveEmail(eventoVaiRemover, emailId) {
    console.log(eventoVaiRemover);
    if (eventoVaiRemover.status === 'removing') {
      this.emailService.deletar(emailId).subscribe(res => {
        console.log(res);
        this.emailList = this.emailList.filter(email => email.id != emailId);
      }, err => console.error(err))
    }
  }

  




}
