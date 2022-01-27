import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../requests';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  newEmployee = new Employee('','',0,'');
  @Output() addEmployee = new EventEmitter<Employee>();

  submitted=false;

  onSubmit(){ this.submitted=true;

  }

  addStaff(){
    this.addEmployee.emit(this.newEmployee);
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
