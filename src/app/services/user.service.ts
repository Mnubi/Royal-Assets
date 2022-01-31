import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { EmailValidator } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getData():Observable<any>{
  const url = "http://127.0.0.1:8000/api/users/"
  return this.httpClient.get<any>(url)
}

url = environment.url;
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