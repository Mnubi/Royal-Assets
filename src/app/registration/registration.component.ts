
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      role: '',
      password: ''
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
      
  }
}


// submit(): void {
//   this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
//     .subscribe(() => this.router.navigate(['/login']));
// }
