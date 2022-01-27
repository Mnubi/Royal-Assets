import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  formValue! : FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      fullName :[''],
      department :[''],
      contact:[''],
      role:['']
    })
  }

}
