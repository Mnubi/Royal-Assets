
import { Request } from './../requests';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  
  newRequest = new Request('',0,'','');
  @Output() addRequest = new EventEmitter<Request>();

  submitted = false;

  onSubmit() { this.submitted = true;
    console.log("banna")
  }

   //TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  submitRequest(){
    this.addRequest.emit(this.newRequest);
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
