import { Component, OnInit } from '@angular/core';
import { Asset } from './../requests';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  assets: Asset[] = [
    new Asset('Laptops', 'Electrical', 1225, 600,60),
    new Asset('Printers', 'Electrical', 4, 1,1),
    new Asset('Office Desks', 'Furniture', 120, 20,4),
    new Asset('Office Chairs', 'Furniture', 120, 20,10),
    new Asset('Projectors', 'Electrical', 5, 1,1),
    
  ];
  addNewAsset(asset: any){
    let assetLength = this.assets.length;
    asset.id = assetLength+1;
    this.assets.push(asset)
  }

  
  constructor() { }

  ngOnInit(): void {
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
