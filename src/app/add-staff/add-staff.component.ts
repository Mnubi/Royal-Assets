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
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    this.form =new FormGroup({
      name:new FormControl('', [Validators.required]),
      username:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
      
});
  }


submitStaff() {
  console.log(this.form.getRawValue());
  
  this.http.post('http://127.0.0.1:8000/api/createuser/', this.form.getRawValue())
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
