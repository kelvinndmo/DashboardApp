import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTwoComponent } from './task-two.component';

describe('TaskTwoComponent', () => {
  let component: TaskTwoComponent;
  let fixture: ComponentFixture<TaskTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
