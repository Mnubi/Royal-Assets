import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  
  Submit(): void {
    // console.log('Valid?', form.valid); // true or false
    console.log(this.myForm.getRawValue());
    // console.log('passord', myForm.value.message);
  }
}
