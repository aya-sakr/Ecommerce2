import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selected:boolean=false
  amount:number=0
   @Input()data:any={}
   @Output()item = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

addData(){
  this.item.emit({ product:this.data,quantity:this.amount})

}
}
