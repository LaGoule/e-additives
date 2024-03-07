import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { search, list, informationCircle } from 'ionicons/icons';
addIcons({ search, list, informationCircle });
import '@khmyznikov/pwa-install';
import { UpdatesNotificationComponent } from './@components/update-notification/update-notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IonicModule,
    UpdatesNotificationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'E-Additif';

  constructor() {
  }
}
