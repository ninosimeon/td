import { Component, Input, OnInit } from '@angular/core';
import { TimerButtonState } from '../timer/timer.configuration';

@Component({
  selector: 'app-timer-button',
  templateUrl: './timer-button.component.html',
  styleUrls: ['./timer-button.component.scss']
})
export class TimerButtonComponent implements OnInit {
  @Input() buttonState: TimerButtonState;

  constructor() { }

  ngOnInit() {
  }

}
