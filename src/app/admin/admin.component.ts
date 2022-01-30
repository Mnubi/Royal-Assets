import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup} from '@angular/forms'
import { Employee } from '../requests';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  formValue! : FormGroup;
  faToolbox = faToolbox;
  faUser = faUser;
  faMoneyBillWave = faMoneyBillWave;

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


  title = 'my-app';
  selectedMenu:any ='Home';

  goTo(paramText:string){
    this.selectedMenu = paramText
  }


}
