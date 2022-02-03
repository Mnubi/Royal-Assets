import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { RequestService } from '../services/request.service';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  form!: FormGroup;
  requests?:any[]
  rawValue: any;
  username :any;
  creds: any;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private requestService:RequestService
  ){}


  
  ngOnInit(): void {
    this.username = localStorage.getItem('username');

    this.form =new FormGroup({
      first_name:new FormControl('', [Validators.required]),
      last_name:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required])
  
});
  }

  updateProfile() {
    this.username = localStorage.getItem('username');
    //console.log(this.form.getRawValue());
    this.http.put('https://royalassets111.herokuapp.com/api/profile/'+ this.username, this.form.getRawValue())//post== creates new post
    .subscribe((data) =>{
      this.creds = data
      console.log(this.creds);
    })
}
}
