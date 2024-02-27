import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
  ],
  standalone: true,
})
export class DetailPageComponent  implements OnInit {
  title="Detail Page"

  constructor() { }

  ngOnInit() {}

}
