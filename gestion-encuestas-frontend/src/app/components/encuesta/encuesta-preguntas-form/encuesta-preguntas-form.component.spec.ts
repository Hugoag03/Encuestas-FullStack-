import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaPreguntasFormComponent } from './encuesta-preguntas-form.component';

describe('EncuestaPreguntasFormComponent', () => {
  let component: EncuestaPreguntasFormComponent;
  let fixture: ComponentFixture<EncuestaPreguntasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaPreguntasFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaPreguntasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
