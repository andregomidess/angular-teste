import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
;
import { CursosComponent } from './cursos.component';
import { CursoDetalherComponent } from './curso-detalher/curso-detalher.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursoDetalherComponent},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
