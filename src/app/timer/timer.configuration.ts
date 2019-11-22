export const enum TimerConfiguration {
  LimitMinutes = 1, // Global limit in minutes.
  MinuteToSeconds = 60,
  SecondToMiliseconds = 1000,
  LapseIntervalMiliseconds = 1000,
}

export const LimitSeconds = TimerConfiguration.LimitMinutes * TimerConfiguration.MinuteToSeconds;

export const LimitMiliseconds = LimitSeconds * TimerConfiguration.SecondToMiliseconds;

export const enum TimerButtonState {
  Play = 'button__action--play',
  Pause = 'button__action--pause',
}
