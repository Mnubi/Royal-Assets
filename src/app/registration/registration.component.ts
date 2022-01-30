
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
  username : string = '';
  email : string ='';
  role : string ='';
  password : string ='';

  roles : string[];
  
  constructor( ) {
    this.roles = [
      'admin',
      'manager',
      'staff'
    ]
   }

  ngOnInit(): void { }

  register(){
    console.log(this.username + " " + this.email + " " + this.role + " " + this.password)
  }

  
}


// submit(): void {
//   this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
//     .subscribe(() => this.router.navigate(['/login']));
// }
