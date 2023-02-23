import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { wineType } from '../data/wineType.model';

@Injectable({
  providedIn: 'root'
})
export class WineTypeService {

  constructor(private Http: HttpClient) { }

  public GetWineTypeEndPoint = "http://localhost:5213/api/WineType";

  GetWineType():Observable<wineType[]>{
    return this.Http.get<wineType[]>(this.GetWineTypeEndPoint);
  }

}
