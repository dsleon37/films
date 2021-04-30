import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPeliculaComponent } from './modificar-pelicula.component';

describe('ModificarPeliculaComponent', () => {
  let component: ModificarPeliculaComponent;
  let fixture: ComponentFixture<ModificarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
