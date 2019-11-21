import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.scss']
})
export class TimerCountdownComponent implements OnInit {
  svgPath: string;

  constructor() {
  }

  ngOnInit() {
    this.svgPath = this.getSvgPath(180);
  }

  getSvgPath(angle: number) {
    angle %= 360;
    const r = (angle * Math.PI) / 180;
    const x = Math.sin(r) * 125;
    const y = Math.cos(r) * -125;
    const mid = angle > 180 ? 1 : 0;
    return `M 0 0 v -125 A 125 125 1 ${mid} 1 ${x} ${y} z`;
  }
}
