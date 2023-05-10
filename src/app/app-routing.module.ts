import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./home/home.component";

//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalherComponent } from './cursos/curso-detalher/curso-detalher.component';
import { LoginComponent } from './login/login.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
  {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalherComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
