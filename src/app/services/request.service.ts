import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url = "https://royalassets111.herokuapp.com/api/request/"

  urlAsset = "https://royalassets111.herokuapp.com/api/asset/"

  constructor(private httpClient:HttpClient) { }
  
  getData(){ 
    return this.httpClient.get<any>(`${this.url}`).toPromise();
  }

  getAsset(){ 
    return this.httpClient.get<any>(`${this.urlAsset}`).toPromise();
  }

}
