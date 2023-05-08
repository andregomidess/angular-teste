import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ModuleWithProviders } from "@angular/core";
import { CursoDetalherComponent } from "./curso-detalher/curso-detalher.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";

const APP_ROUTES: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursoDetalherComponent},
  {path: 'login', component: LoginComponent},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: '', component: HomeComponent},
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
