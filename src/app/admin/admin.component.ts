import { RequestService } from './../services/request.service';
import { StaffService } from './../services/staff.service';
import { Component, OnInit} from '@angular/core';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isExpanded: boolean = false;
  faToolbox = faToolbox;
  assets: any;
  employees?:any[]
  length: any;
  len: any;
  
  constructor(private staffService:StaffService, private requestService:RequestService) { }

  getusers(){
    this.staffService.getData().then((data)=>{
      console.log(data);
      this.employees = data

      this.len = this.employees?.length
    })
  }

  getAssets(){
    this.requestService.getAsset().then((data)=>{
      console.log(data);
      this.assets = data

     this.length = this.assets.length
    })
  }

  ngOnInit(): void {
    this.getusers()
    this.getAssets()
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
