import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public signupForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      role:[''],
      password:[''],
      confirmPasword:['']
    })
  }
  signUp(){
    this.http.post<any>("/registration",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup successful");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong")
    })

}
}
