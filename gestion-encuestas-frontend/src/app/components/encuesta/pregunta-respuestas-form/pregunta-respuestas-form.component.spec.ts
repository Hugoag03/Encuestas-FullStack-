import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaRespuestasFormComponent } from './pregunta-respuestas-form.component';

describe('PreguntaRespuestasFormComponent', () => {
  let component: PreguntaRespuestasFormComponent;
  let fixture: ComponentFixture<PreguntaRespuestasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntaRespuestasFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaRespuestasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
