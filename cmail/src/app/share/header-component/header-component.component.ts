import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/page.service';
import { HeaderService } from 'src/app/header.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  private ismenuOpen = false;

  tituloPagina = "CMAIL";

  get getIsmenuOpen() {
    return this.ismenuOpen;
  }
  constructor(private pageService: PageService, private headerService : HeaderService) {
    this.pageService.titulo.subscribe(titulo => { this.tituloPagina = titulo });
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.ismenuOpen = !this.getIsmenuOpen;
  }


  handleBuscaChanges({ target }) {
    console.log(target.value);
    this.headerService.atualizarTermoDeFiltro(target.value) 
  }


}
