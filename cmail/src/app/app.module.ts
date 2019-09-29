import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuloRoteamento } from './routing.module';
import { CadastroModule } from './cadastro/cadastro.Module';
import { CaixaDeEntradaComponentComponent } from './caixa-de-entrada/caixa-de-entrada-component/caixa-de-entrada-component.component';
import { LoginComponent } from './login/login.component';
import { ShareModule } from './share/share.module';
import { CaixaDeEntradaModule } from './caixa-de-entrada/caixa-de-entrada.module';
import { FiltoPorAssunto } from './filto-por-assunto';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ModuloRoteamento,
    HttpClientModule,
    ShareModule,
    CaixaDeEntradaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
