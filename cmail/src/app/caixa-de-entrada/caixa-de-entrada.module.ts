import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';
import { CaixaDeEntradaComponentComponent } from './caixa-de-entrada-component/caixa-de-entrada-component.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FiltoPorAssunto } from '../filto-por-assunto';



@NgModule({
  declarations: [CaixaDeEntradaComponentComponent, ListItemComponent,
    FiltoPorAssunto],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,

  ],
  exports: [CaixaDeEntradaComponentComponent]
})
export class CaixaDeEntradaModule { }
