import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup} from '@angular/forms'
import { Employee } from '../requests';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  formValue! : FormGroup;

  employees: Employee[] = [
    new Employee('Mary jane','new',72342342,  'urgent'),
    
  ];
  addNewEmployee(employee: any){
    let employeeLength = this.employees.length;
    employee.id = employeeLength+1;
    this.employees.push(employee)
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
