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
  requests: any;
  type: any;
  request: any;
  repair: any;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){
    localStorage
  }
  
  ngOnInit(): void {
    this.form =new FormGroup({
      asset_name:new FormControl('', [Validators.required]),
      quantity:new FormControl('', [Validators.required]),
      type:new FormControl('', [Validators.required]),
      urgency:new FormControl('', [Validators.required]),
      
});
  }


submitRequest() {
  
  this.http.post('https://royalassets111.herokuapp.com/api/createrequest/', this.form.getRawValue())
  .subscribe((data) =>{
     console.log(data);
    this.requests = data
    this.requests.id = this.requests.id
    localStorage.setItem('id', this.requests.id)

  //  window.location.reload();
    
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
