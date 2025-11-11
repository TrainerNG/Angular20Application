import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTemplateForm } from './simple-template-form';

describe('SimpleTemplateForm', () => {
  let component: SimpleTemplateForm;
  let fixture: ComponentFixture<SimpleTemplateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTemplateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTemplateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
