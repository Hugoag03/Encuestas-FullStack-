import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaListComponent } from './encuesta-list.component';

describe('EncuestaListComponent', () => {
  let component: EncuestaListComponent;
  let fixture: ComponentFixture<EncuestaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
