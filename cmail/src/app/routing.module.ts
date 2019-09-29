import {
    Routes,
    RouterModule
} from "@angular/router";
import {
    LoginComponent
} from './login/login.component';
import {
    CadastroComponent
} from './cadastro/cadastro.component';
import {
    CaixaDeEntradaComponentComponent
} from './caixa-de-entrada/caixa-de-entrada-component/caixa-de-entrada-component.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

    {
        path: '',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'inbox',
        component: CaixaDeEntradaComponentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'cadastro',
        loadChildren: './cadastro/cadastro.Module#CadastroModule'
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }



]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
}) export class ModuloRoteamento { }


