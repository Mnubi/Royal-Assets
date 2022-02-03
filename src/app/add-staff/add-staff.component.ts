import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  form!: FormGroup;
  RawValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    this.form =new FormGroup({
      username:new FormControl('', [Validators.required]),
      contact:new FormControl('', [Validators.required]),
      department:new FormControl('', [Validators.required]),  
});
  }


addStaff() {
  console.log(this.form.getRawValue());

  this.http.post('https://royalassets111.herokuapp.com/api/addstaff/', this.form.getRawValue())
  .subscribe((data) =>{
    console.log(data);
    
  } );
}

displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}
