import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient:HttpClient) { }
getData():Observable<any>{ 
  const url = "http://127.0.0.1:8000/api/users/"
  return this.httpClient.get<any>(url)
}

}