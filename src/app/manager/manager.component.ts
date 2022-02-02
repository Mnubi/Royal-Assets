import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  form!: FormGroup;
  requests?:any[]
  rawValue: any;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private requestService:RequestService
  ){}

  getRequest(){
    this.requestService.getData().then((data)=>{
      console.log(data);
      this.requests = data
    })
  }


  ngOnInit(): void {
    this.getRequest()
    this.form =new FormGroup({
      is_approved:new FormControl('', [Validators.required]),
      
});
  }
  


  submitResponse() {
    console.log(this.form.getRawValue());
  
    this.http.post('https://royalassets111.herokuapp.com/api/createrequest/', this.form.getRawValue())//post== creates new post
    .subscribe((data) =>{
      console.log(data);
      
    });
  }
  
  displatyle = "none";
 
  openPopu() {
    this.displatyle = "block";
  }
  
  closePopu() {
    this.displatyle = "none";
  }

  dispstyle = "none";
 
  openPop() {
    this.dispstyle = "block";
  }
  
  closePop() {
    this.dispstyle = "none";
  }
  

}

