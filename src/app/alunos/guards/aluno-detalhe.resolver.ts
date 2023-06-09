import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aluno> | Promise<Aluno> | Aluno {
    let id = route.params['id'];
    console.log('AlunosDetalheResolver');

    return this.alunosService.getAluno(id);
  }
}
