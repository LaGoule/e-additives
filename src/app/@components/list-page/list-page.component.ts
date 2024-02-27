import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
  ],
  standalone: true,
})
export class ListPageComponent  implements OnInit {
  title="List Page"

  constructor() { }

  ngOnInit() {}

}
