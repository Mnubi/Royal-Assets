import { Request } from './../requests';
import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {


  requests: Request[] = [
    new Request('Laptop', 1, 'new', 'urgent'),
    new Request('Hard Drive 1tb', 1, 'new', 'urgent'),
    new Request('Water dispenser', 1, 'repair', 'urgent')
  ];
  addNewRequest(request: any){
    let requestLength = this.requests.length;
    request.id = requestLength+1;
    this.requests.push(request)
  }

  
  constructor() { }

  ngOnInit(): void {
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
