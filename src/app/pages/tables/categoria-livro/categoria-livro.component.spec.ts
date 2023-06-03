import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaLivroComponent } from './categoria-livro.component';

describe('CategoriaLivroComponent', () => {
  let component: CategoriaLivroComponent;
  let fixture: ComponentFixture<CategoriaLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
