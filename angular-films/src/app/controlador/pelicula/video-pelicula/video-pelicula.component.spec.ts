import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPeliculaComponent } from './video-pelicula.component';

describe('VideoPeliculaComponent', () => {
  let component: VideoPeliculaComponent;
  let fixture: ComponentFixture<VideoPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
