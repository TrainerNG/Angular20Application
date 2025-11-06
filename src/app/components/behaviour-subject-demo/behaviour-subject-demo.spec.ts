import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectDemo } from './behaviour-subject-demo';

describe('BehaviourSubjectDemo', () => {
  let component: BehaviourSubjectDemo;
  let fixture: ComponentFixture<BehaviourSubjectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourSubjectDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourSubjectDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
