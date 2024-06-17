import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaFormComponent } from './encuesta-form.component';

describe('EncuestaFormComponent', () => {
  let component: EncuestaFormComponent;
  let fixture: ComponentFixture<EncuestaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
