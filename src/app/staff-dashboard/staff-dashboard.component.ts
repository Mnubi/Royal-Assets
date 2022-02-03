import { RequestService } from './../services/request.service';
import { Component, OnInit} from '@angular/core';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';


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

  
  constructor(private requestService:RequestService) { }

  getRequest(){
    this.requestService.getData().then((data)=>{
      console.log(data);
      this.requests = data
    })
  }

  ngOnInit(): void {
    this.getRequest()
    console.log(localStorage.getItem(this.token));
    
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
