import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';


import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';

//import {routing} from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CursoDetalherComponent } from './cursos/curso-detalher/curso-detalher.component';
import { CursosService } from './cursos/cursos.service';
//import { CursosModule } from './cursos/cursos.module';
import { AlunosComponent } from './alunos/alunos.component';
//import { AlunosModule } from './alunos/alunos.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard.service';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    /*CursosComponent,
    CursoDetalherComponent,
    CursoNaoEncontradoComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    //CursosModule,
    //AlunosModule,
    //routing,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
  ],
  providers: [CursosService, AuthService, AuthGuard, CursosGuard, AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
