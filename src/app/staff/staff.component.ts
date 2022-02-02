import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff: any;

  
  constructor(private staffService:StaffService) { }

  getAssets(){
    this.staffService.getData().then((data)=>{
      console.log(data);
      this.staff = data
    })
  }

  ngOnInit(): void {
    this.getAssets()
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
