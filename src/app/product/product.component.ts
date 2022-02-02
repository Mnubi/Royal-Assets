import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  assets: any;

  
  constructor(private requestService:RequestService) { }

  getAssets(){
    this.requestService.getAsset().then((data)=>{
      console.log(data);
      this.assets = data
    })
  }

  ngOnInit(): void {
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
