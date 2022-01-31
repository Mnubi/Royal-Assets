import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assign } from '../requests';

@Component({
  selector: 'app-assign-form',
  templateUrl: './assign-form.component.html',
  styleUrls: ['./assign-form.component.css']
})
export class AssignFormComponent implements OnInit {
  
  newAssign= new Assign('','','','','');
  @Output() addAssign = new EventEmitter<Assign>();

  submitted = false;

  onSubmit() { this.submitted = true;
    console.log("banna")
  }

   //TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  submitAsset(){
    this.addAssign.emit(this.newAssign);
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
