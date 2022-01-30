import { Component, OnInit } from '@angular/core';
import { Staff } from './../requests';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {


  staffs: Staff[] = [
    new Staff('Mary Jane', 'IT', 'Manager', 'Hp Laptop', +2547364174),
    new Staff('James irungu', 'Finance', 'Manager', 'Hp Laptop', +2547934474),
    new Staff('Lilian Chebet', 'Security', 'Manager', 'Body Scanner', +254736474),
    new Staff('Aaron Ramsey', 'IT', 'Employee', 'Body Scanner', +254706287),
    
  ];
  addNewStaff(staff: any){
    let staffLength = this.staffs.length;
    staff.id = staffLength+1;
    this.staffs.push(staff)
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
