import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Email } from './modelo/Email';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {




  private api = 'http://localhost:3200/emails';
  private cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN') });


  constructor(private http: HttpClient) { }


  enviar({ destinatario, assunto, conteudo, dataDeEnvio }) {
    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo,
      created_at: dataDeEnvio
    }
    console.log('email', emailParaApi)
    return this.http.post(this.api, emailParaApi, { headers: this.cabecalho })
      .pipe<Email>(map((emailApi: any) => {
        return new Email({
          destinatario: emailApi.to,
          assunto: emailApi.subject,
          conteudo: emailApi.content,
          dataDeEnvio: emailApi.created_at
        })
      }))
  }

  listar() {
    return this.http.get(this.api, { headers: this.cabecalho })
      .pipe<Email[]>(map((response: any[]) => {
        return response.map(emailApi =>
          new Email({
            destinatario: emailApi.to,
            assunto: emailApi.subject,
            conteudo: emailApi.content,
            dataDeEnvio: emailApi.created_at
          })
        )
      }
      ))
  }

  deletar(id: number) {
    return this.http.delete(`${this.api}/${id}`,
      { headers: this.cabecalho })
  }

}
        
