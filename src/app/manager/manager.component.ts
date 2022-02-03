import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, NgForm,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { RequestService } from '../services/request.service';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  isExpanded: boolean = false;
  faToolbox = faToolbox;

  form!: FormGroup;
  requests?:any[]
  rawValue: any;
  request_id = localStorage.getItem('id');
  approvals: any;
  length: any;
  assets: any;
  len: any;



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
      this.length = this.requests?.length
      
    })
  }


  getAssets(){
    this.requestService.getAsset().then((data)=>{
      console.log(data);
      this.assets = data
      
     this.len = this.assets.length
    })
  }

  ngOnInit(): void {
    this.getRequest()
    this.getAssets()
    this.form =new FormGroup({
      is_approved:new FormControl('', [Validators.required]),
      
});
  }
  
  submitResponse() {
    console.log(this.form.getRawValue());
  if(this.form.getRawValue() === 'approved' ){
    this.http.put('https://royalassets111.herokuapp.com/api/approve-request/'+ this.request_id, this.form.getRawValue())//post== creates new post
    .subscribe((data) =>{
      console.log(data);
      this.approvals = data
      this.approvals.request_id = this.approvals.id
      
    });
  }else{
    this.http.put('https://royalassets111.herokuapp.com/api/decline-request/'+ this.request_id, this.form.getRawValue())//post== creates new post
    .subscribe((data) =>{
      console.log(data);
      this.approvals = data
      this.approvals.request_id = this.approvals.id
      
    });
  }
    
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

