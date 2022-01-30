import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Asset, Request } from './../requests';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {
  
  newAsset= new Asset('','',0,0,0);
  @Output() addAsset = new EventEmitter<Asset>();

  submitted = false;

  onSubmit() { this.submitted = true;
    console.log("banna")
  }

   //TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  submitAsset(){
    this.addAsset.emit(this.newAsset);
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }


  constructor() { }

  ngOnInit(): void {
  }

}
