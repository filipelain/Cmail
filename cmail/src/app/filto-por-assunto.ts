import { Pipe, PipeTransform } from '@angular/core';
import { Email } from './modelo/Email';

@Pipe({ name: 'filtroPorAssunto' })
export class FiltoPorAssunto implements PipeTransform {

    transform(listaEmails: Email[], termoFiltro:String = '') {
        console.log(`Filtro`)
        return listaEmails.filter(email => email.assunto.toLowerCase().includes(termoFiltro.toLowerCase()));





    }
}
