import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
  ],
  standalone: true,
})
export class SearchPageComponent  implements OnInit {
  title="Search Page"

  constructor() { }

  ngOnInit() {}

}
