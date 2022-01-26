import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  creds?:any[]
  
  
    constructor(private userService:UserService) { }
  
    ngOnInit(): void {
      this.userService.getData().subscribe((data) => {
        console.log(data);
        this.creds = data
        
      });
    }
  
  }
