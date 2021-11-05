import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaVisualizarComponent } from './categoria-visualizar.component';

describe('CategoriaVisualizarComponent', () => {
  let component: CategoriaVisualizarComponent;
  let fixture: ComponentFixture<CategoriaVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
