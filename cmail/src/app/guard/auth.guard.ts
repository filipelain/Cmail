import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private roteador: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('TOKEN')) {
      console.log('Está Logado')
      return true;
    }
    console.log(`não está logado`)
    this.roteador.navigate([''])
    return false;
  }

}
