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
        title = 'Acceptable';
        break;
      case '1': // Jaune
        title = 'Rapports contradictoires';
        break;
      case '2': // Orange
        title = 'À risque';
        break;
      case '3': // Rouge
        title = 'À éviter';
        break;
      default:
        title = 'Non spécifié';
        break;
    }
    return title;
  }

}
