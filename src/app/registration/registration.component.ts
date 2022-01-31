import { UserService } from './../services/user.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userservice : UserService
  ) {
  }
  ngOnInit(): void {
      this.form =new FormGroup({
        first_name:new FormControl('', [Validators.required]),
        last_name:new FormControl('', [Validators.required]),
        username:new FormControl('', [Validators.required]),
        email:new FormControl('', [Validators.required]),
        password:new FormControl('', [Validators.required]),
});

  }
  
  onSubmit() {
    console.log(this.form.getRawValue());
    
    this.http.post('http://127.0.0.1:8000/api/users/create/', this.form.getRawValue())
    .subscribe(() => this.router.navigate(['login/']));
}
  }
