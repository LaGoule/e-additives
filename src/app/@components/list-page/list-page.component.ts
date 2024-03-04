import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DangerColorPipe } from '../../@pipes/danger-color.pipe';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';
import { DatabaseService } from '../../@services/database.service';
addIcons({ chevronForwardOutline });


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    DangerColorPipe,
  ],
  standalone: true,
})
export class ListPageComponent {
  title="Liste des additifs"
  items!: Promise<any[]>;

  DEFAULT_MAX_ITEMS_TO_SHOW = 30;
  maxItemsToShow = this.DEFAULT_MAX_ITEMS_TO_SHOW;
  SKELETON_DELAY = 800;

  constructor(
    private readonly _databaseService: DatabaseService
  ) { }

  ionViewWillEnter() {
    this.maxItemsToShow = this.DEFAULT_MAX_ITEMS_TO_SHOW;
    this.items = this._databaseService.getItems();
  }

  onIonInfinite(event: any) {
    setTimeout(() => {
      this.maxItemsToShow += this.DEFAULT_MAX_ITEMS_TO_SHOW;
      event.target.complete();
    }, this.SKELETON_DELAY);
  }
}
