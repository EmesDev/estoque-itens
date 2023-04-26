import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEstoqueComponent } from './cards-estoque.component';

describe('CardsEstoqueComponent', () => {
  let component: CardsEstoqueComponent;
  let fixture: ComponentFixture<CardsEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
