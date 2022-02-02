import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {
  
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    this.form =new FormGroup({
      asset_value:new FormControl('', [Validators.required]),
      category:new FormControl('', [Validators.required]),
      name:new FormControl('', [Validators.required]),
      quantity:new FormControl('', [Validators.required]),     
});
  }


submitRequest() {
  console.log(this.form.getRawValue());
  
  this.http.post('https://royalassets111.herokuapp.com/api/createasset/', this.form.getRawValue())
  .subscribe((data) =>{
    console.log(data);
    
  } );
}

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}
