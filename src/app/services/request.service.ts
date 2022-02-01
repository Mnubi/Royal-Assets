import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url = "http://127.0.0.1:8000/api/request/"

  constructor(private httpClient:HttpClient) { }
  
  getData(){ 
    return this.httpClient.get<any>(`${this.url}`).toPromise();
  }
}
