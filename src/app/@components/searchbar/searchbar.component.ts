import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DangerColorPipe } from '../../@pipes/danger-color.pipe';
import { DatabaseService } from '../../@services/database.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DangerColorPipe,
  ],
  standalone: true,
})
export class SearchbarComponent  implements OnInit {
  private MAX_AUTOCOMPLETE_RESULTS: number = 5;

  inputValue: string = '';
  public autocompleteResults: any[] = [];
  @Output() public sendInputChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sendNavigateTo: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly _databaseService: DatabaseService,
  ) { }

  ngOnInit() {}

  public clearInputValue() {
    this.inputValue = '';
  }

  emitInputChange($event: any) {
    this.sendInputChange.emit($event);
  }

  emitNavigateTo($event: any) {
    this.sendNavigateTo.emit($event);
  }
  
  protected async inputChange($event: any) {
    const value = $event.target.value;
    if (value.length === 0) {
      this.clearInputValue();
      return;
    }
    const list = await this._databaseService.getItems();
    const items = list.filter(
      (item: any) => item.id.startsWith(value.toLowerCase())
    ).slice(0, this.MAX_AUTOCOMPLETE_RESULTS);
    this.autocompleteResults = items;
    // this.sendInputChange.emit(value);
    this.emitInputChange(value);
  }

  protected selectAutocompleteResult(item: any) {
    this.inputValue = item.id;
    this.autocompleteResults = [];
    this.emitNavigateTo(this.inputValue);
    this.clearInputValue();
  }
}
