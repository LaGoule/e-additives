import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private readonly _httpClient: HttpClient
  ) {}

  public async getItems(id?: string): Promise<any>{
    //url
    const url = './assets/db.json';
    //request
    const request = this._httpClient.get(url);
    //response
    const response: any = await firstValueFrom(request);
    //items array
    const itemsArray = response.additives;
    // console.log(itemsArray);
    //filter response by id
    if (id) {
      const filterArray = itemsArray.find((item: any) => item.id === id);
      // console.log(filterArray);
      return filterArray;
    }
    return itemsArray;
  }
}
