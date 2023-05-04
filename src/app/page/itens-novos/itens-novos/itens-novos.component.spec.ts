import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensNovosComponent } from './itens-novos.component';

describe('ItensNovosComponent', () => {
  let component: ItensNovosComponent;
  let fixture: ComponentFixture<ItensNovosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensNovosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensNovosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
