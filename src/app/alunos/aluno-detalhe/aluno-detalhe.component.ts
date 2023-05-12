import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) {

  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  ngOnInit(): void {
  //   this.inscricao = this.route.params.subscribe((params: any) => {
  //     let id = params['id'];

  //     this.aluno = this.AlunosService.getAluno(id);
  // });
    console.log('ngOnInit: AlunoDetalheComponenent');
  this.inscricao = this.route.data.subscribe(
    (  info  ) => {
      console.log('Recebendo o obj aluno do resolver');
      this.aluno = info['aluno'];
    }
  );

  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
