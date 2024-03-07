import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dangerTitle',
  standalone: true
})
export class DangerTitlePipe implements PipeTransform {

  transform(dangerLevel: string): string {
    let title: string;
    switch (dangerLevel) {
      case '0': // Vert
        title = 'Sans risque';
        break;
      case '1': // Jaune
        title = 'Risque limité';
        break;
      case '2': // Orange
        title = 'Risque modéré';
        break;
      case '3': // Rouge
        title = 'À risque';
        break;
      default:
        title = 'Non spécifié';
        break;
    }
    return title;
  }

}
