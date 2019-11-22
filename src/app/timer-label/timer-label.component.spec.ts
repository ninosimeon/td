import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLabelComponent } from './timer-label.component';
import { TimeDisplayPipe } from '../time-display.pipe';

describe('TimerLabelComponent', () => {
  let component: TimerLabelComponent;
  let fixture: ComponentFixture<TimerLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerLabelComponent , TimeDisplayPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
