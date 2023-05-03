import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoItemFormComponent } from './novo-item-form.component';

describe('NovoItemFormComponent', () => {
  let component: NovoItemFormComponent;
  let fixture: ComponentFixture<NovoItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovoItemFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NovoItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
