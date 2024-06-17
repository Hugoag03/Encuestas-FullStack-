import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaRespuestasListComponent } from './pregunta-respuestas-list.component';

describe('PreguntaRespuestasListComponent', () => {
  let component: PreguntaRespuestasListComponent;
  let fixture: ComponentFixture<PreguntaRespuestasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntaRespuestasListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaRespuestasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
