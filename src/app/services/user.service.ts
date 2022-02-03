import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  username?: any;
  url = environment.url;
  urlProfile = "https://royalassets111.herokuapp.com/api/profile/<username>"
  token : any;
  
  constructor(private httpClient:HttpClient) {
    
   }

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