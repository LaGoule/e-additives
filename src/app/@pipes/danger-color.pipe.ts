import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dangerColor',
  standalone: true
})
export class DangerColorPipe implements PipeTransform {

  transform(dangerLevel: string): string {
    let colorCode: string;
    switch (dangerLevel) {
      case '0': // Vert
        colorCode = '#2fdf75';
        break;
      case '1': // Jaune
        colorCode = '#ffd534';
        break;
      case '2': // Orange
        colorCode = '#ff9d34';
        break;
      case '3': // Rouge
        colorCode = '#ff4961';
        break;
      default:
        colorCode = '#FFF';
        break;
    }
    return colorCode;
  }

}
