export const enum TimerConfiguration {
  LimitMinutes = 30, // Global limit in minutes.
  MinuteToSeconds = 60,
  LapseIntervalMiliseconds = 1000,
}

export const LimitSeconds = TimerConfiguration.LimitMinutes * TimerConfiguration.MinuteToSeconds;

export const enum TimerButtonState {
  Play = 'button__action--play',
  Pause = 'button__action--pause',
}
