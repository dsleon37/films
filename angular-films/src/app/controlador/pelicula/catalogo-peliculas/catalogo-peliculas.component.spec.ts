import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPeliculasComponent } from './catalogo-peliculas.component';

describe('CatalogoPeliculasComponent', () => {
  let component: CatalogoPeliculasComponent;
  let fixture: ComponentFixture<CatalogoPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
