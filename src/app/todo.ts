import { LimitSeconds } from './timer/timer.configuration';

export class Todo {
  id: number;
  title = '';
  complete = false;
  secondsLapsed = 0;
  remainingSeconds = LimitSeconds;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
