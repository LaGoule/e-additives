import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { search, list, informationCircle } from 'ionicons/icons';
addIcons({ search, list, informationCircle });

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IonicModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'additives-finder';

  constructor() {
  }
}
