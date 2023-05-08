import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoDetalherComponent } from './curso-detalher/curso-detalher.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
    //RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalherComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [CursosService],
})
export class CursosModule { }
