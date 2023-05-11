import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { IFormDeactivate } from 'src/app/guards/form-candeacticate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormDeactivate {
  aluno: any = {};
  inscricao: Subscription = new Subscription();
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute, private AlunosService: AlunosService) {

  }
  podeDesativar() {
    return this.podeMudarRota();
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

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(){
    console.log("chamou");
    if (this.formMudou){
      return confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

}
