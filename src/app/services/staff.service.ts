import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  url = "https://royalassets111.herokuapp.com/api/stafflist/"

  constructor(private httpClient:HttpClient) { }
  
  getData(){ 
    return this.httpClient.get<any>(`${this.url}`).toPromise();
  }
}
