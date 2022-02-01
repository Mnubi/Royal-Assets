import { RequestService } from './../services/request.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  requests?:any[]

  
  constructor(private requestService:RequestService) { }

  getRequest(){
    this.requestService.getData().then((data)=>{
      console.log(data);
      this.requests = data
    })
  }

  ngOnInit(): void {
    this.getRequest()
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
