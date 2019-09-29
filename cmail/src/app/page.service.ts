import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }


  titulo = new Subject<string>();


  defineTitulo(novoTitulo: string) {
    document.querySelector('title').textContent = novoTitulo; 
    this.titulo.next(novoTitulo);
  }


}
