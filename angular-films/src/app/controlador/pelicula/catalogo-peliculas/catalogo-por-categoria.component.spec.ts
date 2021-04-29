import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPorCategoriaComponent } from './catalogo-por-categoria.component';

describe('CatalogoPorCategoriaComponent', () => {
  let component: CatalogoPorCategoriaComponent;
  let fixture: ComponentFixture<CatalogoPorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoPorCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
