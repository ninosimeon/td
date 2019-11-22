import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDisplay'
})
export class TimeDisplayPipe implements PipeTransform {

  transform(seconds: number): string {
    const minutes = Math.floor(seconds % 3600 / 60);
    const sec = seconds % 60;
    return [minutes, sec].map(el => `${el}`.padStart(2, '0')).join(':');
  }

}
