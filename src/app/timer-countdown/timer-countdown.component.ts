import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LimitSeconds } from '../timer/timer.configuration';

@Component({
  selector: 'app-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerCountdownComponent {
  svgPath: string;

  @Input() set lapsedSeconds(value: number) {
    this.setupAngle(value);
  }

  private setupAngle(value) {
    let angle = this.secondsToAngle(value);
    angle = this.getLimitAngle(angle);
    this.svgPath = this.getSvgPath(angle);
  }

  /**
   * Trick to render the countdown avoinding zero value.
   * @param angle
   */
  getLimitAngle(angle: number) {
    const min = 0.001;
    const max = 359.999;
    if (angle < min) {
      return min;
    }
    return (angle > max) ? max : angle;
  }

  secondsToAngle(seconds: number) {
    return seconds * 360 / LimitSeconds;
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
