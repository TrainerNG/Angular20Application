import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleReactiveForm } from './simple-reactive-form';

describe('SimpleReactiveForm', () => {
  let component: SimpleReactiveForm;
  let fixture: ComponentFixture<SimpleReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleReactiveForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleReactiveForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
