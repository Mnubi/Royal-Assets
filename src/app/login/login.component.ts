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

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userservice : UserService
  ) {}
  ngOnInit(): void {
    this.form =new FormGroup({
      email:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
});
  }
  
  loginUser() {
    console.log(this.form.getRawValue());
    this.http.post('http://127.0.0.1:8000/login/', this.form.getRawValue())
    .subscribe(() => this.router.navigate(['/manager']));
}
  }
