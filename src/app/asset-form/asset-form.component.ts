import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import { UserService } from './../services/user.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Asset, Request } from './../requests';

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
  ){

  }
  
  ngOnInit(): void {
    this.form =new FormGroup({
      Item:new FormControl('', [Validators.required]),
      Category:new FormControl('', [Validators.required]),
      assigned:new FormControl('', [Validators.required]),
      stored:new FormControl('', [Validators.required]),
      broken:new FormControl('', [Validators.required]),
      
});
  }
   //TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  submitAsset() {
    console.log(this.form.getRawValue());
    
    this.http.post('https://royalassets111.herokuapp.com/api/createasset/', this.form.getRawValue())
    .subscribe((data) =>{
      console.log(data);
      
    } );
  }

   //@Output() addRequest = new EventEmitter<Request>();

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }


  
}
