import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  creds?:any[]
  token = localStorage.getItem('token')
  username = localStorage.getItem('username')
  currentUser: any;
  role: any;

  
    constructor(private http : HttpClient) { 
      
    }
  
    getUser(username : any) {
      this.http.get('https://royalassets111.herokuapp.com/api/profile/'+ {username})
      .subscribe((data) =>{
         
      }); 
    }

    ngOnInit(): void {
      console.log(this.username);
      
      this.getUser(this.username)
      
      
  };
  
  }
