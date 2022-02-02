import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../requests';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){

  }
  
  ngOnInit(): void {
    this.form =new FormGroup({
      Name:new FormControl('', [Validators.required]),
      Department:new FormControl('', [Validators.required]),
      Contact:new FormControl('', [Validators.required]),
      Title:new FormControl('', [Validators.required]),
      Action:new FormControl('', [Validators.required]),
      
});
  }
   //TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  addStaff() {
    console.log(this.form.getRawValue());
    
    this.http.post('https://royalassets111.herokuapp.com/api/addstaff/', this.form.getRawValue())
    .subscribe((data) =>{
      console.log(data);
      
    } );
  }

   //@Output() addRequest = new EventEmitter<Request>();

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

}
