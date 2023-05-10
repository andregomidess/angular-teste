import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {
  aluno: any = {};
  inscricao: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private AlunosService: AlunosService) {

  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.AlunosService.getAluno(id);
      console.log(this.aluno);

      if (this.aluno === null) {
        this.aluno = {};
      }
  });

  }

}
