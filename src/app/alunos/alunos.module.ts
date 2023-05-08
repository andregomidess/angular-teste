import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModle } from './alunos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModle
  ],
  exports: [],
  declarations: [AlunosComponent],
  providers: [],
})
export class AlunosModule { }
