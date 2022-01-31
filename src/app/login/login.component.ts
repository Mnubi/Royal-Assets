import { UserService } from './../services/user.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  data: any;
  token: any;
  role: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userservice : UserService
  ) {
    localStorage.clear();
  }


  ngOnInit(): void {
    this.form =new FormGroup({
      username:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
});
  }
  
  loginUser() {
    this.http.post('http://127.0.0.1:8000/login/', this.form.getRawValue())
    .subscribe((data) =>{
       this.token = data;
       //console.log(this.token);
       localStorage.setItem('token', this.token.token)

      this.getUser();
    }); 
  }
  
  getUser() {
    this.http.post('http://127.0.0.1:8000/api/user/', this.token)
    .subscribe((data) =>{
       this.role = data;
       this.role = this.role.role;
       //console.log(this.role);
       if(this.role === 3){
        this.router.navigate(['staff/']);
       }else if(this.role ===2){
         this.router.navigate(['manager/']);
       }else{
         this.router.navigate(['admin/']);
       }
    }); 
  }
}
