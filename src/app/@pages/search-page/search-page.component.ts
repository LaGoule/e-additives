import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DangerColorPipe } from '../../@pipes/danger-color.pipe';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { flask, search, closeOutline } from 'ionicons/icons';
import { SearchbarComponent } from '../../@components/searchbar/searchbar.component';
addIcons({ flask, search, closeOutline });

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    DangerColorPipe,
    SearchbarComponent,
  ],
  standalone: true,
})
export class SearchPageComponent implements OnInit {
  title: string = "Rechercher un additif";
  searchInputValue: string = '';

  constructor(
    private readonly _router: Router,
  ) {};

  ngOnInit() {}

  public submitSearch() {
    this.navigateTo(this.searchInputValue);
  }

  protected navigateTo(inputValue: string) {
    if (inputValue.length === 0) {
      alert('Veuillez entrer une valeur de recherche');
      return;
    }
    this.searchInputValue = '';
    this._router.navigateByUrl(`list/${inputValue}`);
  }

  protected receiveNavigateRequest($event: any) {
    this.navigateTo($event);
  }

  protected searchInputChange($event: any) {
    this.searchInputValue = $event;
  }
}
