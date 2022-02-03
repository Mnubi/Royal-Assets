import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  creds?:any
  token = localStorage.getItem('token')
  username = localStorage.getItem('username')
  currentUser: any;
  role: any;

  
    constructor(private http : HttpClient) { 
      
    }
  
    getUser(username : any) {
      this.http.get('https://royalassets111.herokuapp.com/api/profile/'+ this.username)
      .subscribe((data) =>{
        console.log(data);
        this.creds = data;
        
        if(this.creds.role === 3){
          this.creds.role = 'Employee'
        }else if(this.creds.role === 2){
          this.creds.role = 'Manager'
        }else{
          this.creds.role = 'Admin'
        }
        
         
      }); 
    }

    ngOnInit(): void {
      console.log(this.username);
      
      this.getUser(this.username)
      
      
  };
  
  }
