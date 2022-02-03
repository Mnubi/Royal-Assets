import { RequestService } from './../services/request.service';
import { Component, OnInit} from '@angular/core';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {
  isExpanded: boolean = false;
  faToolbox = faToolbox;

  requests?:any[]
  token: any;
  type:any;
  id:any;
  length:any;

 username = localStorage.getItem('username')

  
  constructor(private requestService:RequestService, private router: Router){ }

  getRequest(){
    this.requestService.getData().then((data)=>{
      this.requests = data
      this.length = this.requests?.length
      console.log(this.length);
    })
  }

  route(){
    const username = this.username
    this.router.navigate(['/users/'+ {username}])
  }

  ngOnInit(): void {
    this.getRequest()
    this.username = this.username
    
  }

  
  displatyle = "none";
 
  openPopu() {
    this.displatyle = "block";
  }
  
  closePopu() {
    this.displatyle = "none";
  }

  dispstyle = "none";
 
  openPop() {
    this.dispstyle = "block";
  }
  
  closePop() {
    this.dispstyle = "none";
  }
  

}
