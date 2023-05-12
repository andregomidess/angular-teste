import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";

const alunosRoutes: any[] = [
  {path: '', component: AlunosComponent, children: [
    //hardcoded deve ser avaliado primeiro nas rotas
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent, resolve: {aluno: AlunoDetalheResolver}},
    {path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard]},
  ]},



]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModle {

}
