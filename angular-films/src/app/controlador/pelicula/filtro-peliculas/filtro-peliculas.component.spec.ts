import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPeliculasComponent } from './filtro-peliculas.component';

describe('FiltroPeliculasComponent', () => {
  let component: FiltroPeliculasComponent;
  let fixture: ComponentFixture<FiltroPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
