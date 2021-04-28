import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDatosPeliculaComponent } from './alta-datos-pelicula.component';

describe('AltaDatosPeliculaComponent', () => {
  let component: AltaDatosPeliculaComponent;
  let fixture: ComponentFixture<AltaDatosPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaDatosPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaDatosPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
