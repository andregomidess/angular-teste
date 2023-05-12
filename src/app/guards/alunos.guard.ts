import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { of } from 'rxjs';


@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AlunosGuard: Guarda de rota filha');
    if (state.url.includes('editar')){
      // alert('Usuário sem acesso');
      // return of(false);
    }
    return true;
  }

}
