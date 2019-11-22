import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LimitSeconds } from '../timer/timer.configuration';

@Component({
  selector: 'app-timer-label',
  templateUrl: './timer-label.component.html',
  styleUrls: ['./timer-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerLabelComponent {
  lapsedSeconds = 0;

  @Input() set remainingSeconds(value: number) {
    this.lapsedSeconds = LimitSeconds - value;
  }

}
