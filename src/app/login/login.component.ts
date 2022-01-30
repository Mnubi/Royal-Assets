import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = '';
  password : string = '';
  constructor() { }
  ngOnInit(): void {}
  login(){
    console.log(this.email + " " +this.password)
  }
}