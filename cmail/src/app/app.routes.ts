import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { CaixaDeEntradaComponentComponent } from './caixa-de-entrada-component/caixa-de-entrada-component.component';
import { CadastroComponent } from './cadastro/cadastro.component';
const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'inbox', component: CaixaDeEntradaComponentComponent },
    { path: 'cadastro', component: CadastroComponent },
    {path:	'**',	redirectTo:	'inbox'}



]
export const ModuloRoteamento = RouterModule
    .forRoot(routes);
