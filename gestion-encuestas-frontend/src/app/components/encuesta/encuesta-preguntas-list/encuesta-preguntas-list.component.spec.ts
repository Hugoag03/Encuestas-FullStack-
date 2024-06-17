import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaPreguntasListComponent } from './encuesta-preguntas-list.component';

describe('EncuestaPreguntasListComponent', () => {
  let component: EncuestaPreguntasListComponent;
  let fixture: ComponentFixture<EncuestaPreguntasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaPreguntasListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaPreguntasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
