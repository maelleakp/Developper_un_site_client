import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../data/item.model';
import { Provider } from '../data/provider.model';
import { wineType } from '../data/wineType.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private Http: HttpClient) { }

  public GetAllItemEndPoint = "http://localhost:5213/api/Item";
  public GetSingleItemEndPoint = "http://localhost:5213/api/Item/";
  public AddItemEndPoint = "http://localhost:5213/api/Item";
  public UpdateItemEndPoint = "http://localhost:5213/api/Item/";
  public DeleteItemEndPoint = "http://localhost:5213/api/Item/";

  public GetWineTypeEndPoint = "http://localhost:5213/api/WineType";

  public GetProviderEndPoint = "http://localhost:5213/api/Provider";

  GetItem(id:number):Observable<Item>{
    return this.Http.get<Item>(this.GetSingleItemEndPoint+id);
  }

  GetWineType():Observable<wineType[]>{
    return this.Http.get<wineType[]>(this.GetWineTypeEndPoint);
  }

  GetProvider():Observable<Provider[]>{
    return this.Http.get<Provider[]>(this.GetProviderEndPoint);
  }

  GetAllItem():Observable<Item[]>{
    return this.Http.get<Item[]>(this.GetAllItemEndPoint);
  }

  AddItem(item: Item){
    return this.Http.post(this.AddItemEndPoint, item);
  }

  UpdateItem(id:number, item:Item){
    return this.Http.put(this.UpdateItemEndPoint+id, item);
  }

  RemoveItem(id:number){
    return this.Http.delete(this.DeleteItemEndPoint+id);
  }

}
