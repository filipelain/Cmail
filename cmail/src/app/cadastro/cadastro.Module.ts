import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CmailFormModule } from '../cmail-form/cmail-form.module';
import { ShareModule } from '../share/share.module';
import { CadastroComponent } from './cadastro.component';
import { CaixaDeEntradaModule } from '../caixa-de-entrada/caixa-de-entrada.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CadastroComponent,
    ],
    imports: [
        CommonModule,
        ShareModule, 
        ReactiveFormsModule, 
        CmailFormModule,
        CadastroRoutingModule
    ],
    exports: [CadastroComponent]
})
export class CadastroModule { }
