import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimerButtonState, TimerConfiguration } from './timer.configuration';
import { NEVER, Subject, timer } from 'rxjs';
import { filter, map, switchMap, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { TimerService } from '../timer.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  private _item: Todo;

  @Input() set item(value: Todo) {
    this._item = value;
    this.currentSeconds = this.remainingSeconds = value.remainingSeconds;
  }

  get item() {
    return this._item;
  }

  buttonState = TimerButtonState.Play;
  remainingSeconds: number;
  // temporary parameter to hold the "current time" in seconds.
  currentSeconds: number;
  private destroy$ = new Subject<void>();

  constructor(private timerService: TimerService) {
  }

  ngOnInit(): void {
    this.timerService.onTimer().pipe(
        switchMap((running: boolean) => {
          return running ? timer(0, TimerConfiguration.LapseIntervalMiliseconds) : NEVER;
        }),
        map((lapsedSeconds: number) => this.timerService.remainingSeconds(lapsedSeconds, this.remainingSeconds)),
        takeWhile(time => time >= 0),
        tap(miliseconds => this.currentSeconds = miliseconds),
    ).subscribe();
    this.timerService.onTimer().pipe(
        takeUntil(this.destroy$),
        filter((toggled: boolean) => !toggled),
        tap(() => {
          this.remainingSeconds = this.currentSeconds;
        }),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  toggleTimerButton() {
    this.buttonState = (this.buttonState === TimerButtonState.Play) ? TimerButtonState.Pause : TimerButtonState.Play;
    (this.buttonState === TimerButtonState.Pause) ? this.timerService.timer(true) : this.timerService.timer(false);
  }
}
