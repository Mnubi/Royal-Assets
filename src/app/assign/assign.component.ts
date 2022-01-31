import { Component, OnInit } from '@angular/core';
import { Assign } from './../requests';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  assigns: Assign[] = [
    new Assign('Laptops', 'Security', 'Electrical', 'John Mwangi','Manager'),
    
    
  ];
  addNewAssign(assign: any){
    let assignLength = this.assigns.length;
    assign.id = assignLength+1;
    this.assigns.push(assign)
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
