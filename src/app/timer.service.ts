import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TimerService {
  private timer$ = new Subject<boolean>();

  constructor() {
  }

  onTimer() {
    return this.timer$.asObservable();
  }

  timer(value: boolean) {
    return this.timer$.next(value);
  }

  remainingSeconds(lapsedSeconds: number, remainingSeconds: number) {
    return remainingSeconds - lapsedSeconds;
  }
}
