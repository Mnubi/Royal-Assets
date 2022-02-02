import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  username?: string;
  url = environment.url;
  urlProfile = "http://127.0.0.1:8000/api/profile/<username>"
  
  constructor(private httpClient:HttpClient) { }

  // getUser(){ 
  //   return this.httpClient.get<any>(`${this.urlProfile}${this.username}`).toPromise();
  // }
  getUser():Observable<any>{ 
    return this.httpClient.get<any>(this.urlProfile)
  }


  // create new user
  createUser(username: string, password: string) {
    return this.httpClient.post(
      this.url+ 'api/users/create/',
      {
        username: username,
        password: password,
      },
    );
  }
  // login user
  loginUser(username: string, password: string) {
    return this.httpClient.post(
      this.url + 'login/',
      {
        username: username,
        password: password,
      },
    );
  }
}