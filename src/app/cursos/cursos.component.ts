import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[] = [];
  pagina: number = 0;
  inscricao: Subscription = new Subscription();

  constructor(
    private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) {

    }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();
    console.log(this.cursos);
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
  });
  }

  proximaPagina(){
    //this.pagina = this.pagina++;
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}});
  }
}
