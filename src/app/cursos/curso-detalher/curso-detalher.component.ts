import { CursosService } from '../cursos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-curso-detalher',
  templateUrl: './curso-detalher.component.html',
  styleUrls: ['./curso-detalher.component.scss']
})
export class CursoDetalherComponent implements OnInit, OnDestroy {

  id: number = 0;
  inscricao: Subscription = new Subscription();
  curso: any;

  constructor(private route: ActivatedRoute, private CursosService: CursosService, private router: Router) {
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.route);
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
  ngOnInit(): void {
    this.inscricao =  this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this.CursosService.getCurso(this.id);
      console.log(this.curso);
      if (this.curso == null){
        this.router.navigate(['/naoEncontrado']);
      }

    })
  }

}
