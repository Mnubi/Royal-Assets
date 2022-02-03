import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  employees: any;
  len: any;


  
  constructor(private staffService:StaffService) { }


  getusers(){
    this.staffService.getData().then((data)=>{
      console.log(data);
      this.employees = data

      this.len = this.employees?.length
    })
  }

  ngOnInit(): void {
    this.getusers()
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
