import { Component, OnInit } from '@angular/core';
import { Repair } from '../requests';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {



  repairs: Repair[] = [
    new Repair('Laptop','Security', 'Repair','urgent', 'Approved'),
    
    
  ];
  addNewRepair(repair: any){
    let requestLength = this.repairs.length;
    repair.id = requestLength+1;
    this.repairs.push(repair)
  }

  constructor() { }

  ngOnInit(): void {
  }

}