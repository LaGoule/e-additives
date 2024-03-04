import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons';
addIcons({ search });

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  standalone: true,
})
export class SearchPageComponent  implements OnInit {
  title: string = "Rechercher un additif";
  searchInputValue: string = '';

  constructor(
    private readonly _router: Router,
  ) { }

  ngOnInit() {}

  protected navigateToSearch(inputValue: string) {
    if (inputValue.length === 0) {
      alert('Veuillez entrer une valeur de recherche');
      return;
    }
    

    this._router.navigateByUrl(`list/${inputValue}`);
    this.searchInputValue = '';
  }
}
