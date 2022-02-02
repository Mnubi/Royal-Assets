import { StaffService } from './../services/staff.service';
import { Component, OnInit} from '@angular/core';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isExpanded: boolean = false;
  faToolbox = faToolbox;

  employees?:any[]

  
  constructor(private staffService:StaffService) { }

  getusers(){
    this.staffService.getData().then((data)=>{
      console.log(data);
      this.employees = data
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
