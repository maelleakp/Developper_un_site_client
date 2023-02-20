import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../data/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private Http: HttpClient) { }

  public GetProviderEndPoint = "http://localhost:5213/api/Provider";

  GetProvider():Observable<Provider[]>{
    return this.Http.get<Provider[]>(this.GetProviderEndPoint);
  }

}
