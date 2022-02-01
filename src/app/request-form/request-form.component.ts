import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    this.form =new FormGroup({
      asset_name:new FormControl('', [Validators.required]),
      quantity:new FormControl('', [Validators.required]),
      type:new FormControl('', [Validators.required]),
      urgency:new FormControl('', [Validators.required]),
      
});
  }


submitRequest() {
  console.log(this.form.getRawValue());
  
  this.http.post('http://127.0.0.1:8000/api/createrequest/', this.form.getRawValue())
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
