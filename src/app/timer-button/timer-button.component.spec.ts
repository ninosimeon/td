import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerButtonComponent } from './timer-button.component';

describe('TimerButtonComponent', () => {
  let component: TimerButtonComponent;
  let fixture: ComponentFixture<TimerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
