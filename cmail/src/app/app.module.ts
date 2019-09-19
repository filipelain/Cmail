import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuloRoteamento } from './app.routes';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CaixaDeEntradaComponentComponent } from './caixa-de-entrada-component/caixa-de-entrada-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CaixaDeEntradaComponentComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
