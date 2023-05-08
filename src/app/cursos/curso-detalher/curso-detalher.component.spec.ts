import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalherComponent } from './curso-detalher.component';

describe('CursoDetalherComponent', () => {
  let component: CursoDetalherComponent;
  let fixture: ComponentFixture<CursoDetalherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoDetalherComponent]
    });
    fixture = TestBed.createComponent(CursoDetalherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
