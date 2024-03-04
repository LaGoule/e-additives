import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute,  } from '@angular/router';
import { DangerColorPipe } from '../../@pipes/danger-color.pipe';
import { DangerTitlePipe } from '../../@pipes/danger-title.pipe';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    DangerColorPipe,
    DangerTitlePipe,
  ],
  standalone: true,
})
export class DetailPageComponent {
  title="Detail de ";
  item!: any;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
  ) { }

  async ionViewWillEnter() {
    this.item = this._route.snapshot.data['item'];
    const id = this.item.id;
    // Si l'additif n'est pas trouvé, on redirige vers la page de recherche
    if (this.item === undefined && id !== null) {
      this._router.navigate(['/search']);
      alert('Erreur: Impossible de trouver l\'additif');
      return;
    }
  }
}
