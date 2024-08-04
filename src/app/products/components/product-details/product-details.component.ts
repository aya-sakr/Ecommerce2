import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any
  productId:any
  loading:boolean=false
  constructor(private activRoute:ActivatedRoute,

             private service:ProductsService ){
    this.id=  this.activRoute.snapshot.paramMap.get("id")
    console.log(this.id)

  }
  ngOnInit(): void {
    this.getProductID()
  }

  getProductID(){
    this.loading = true
    this.service.getProductById(this.id).subscribe(res=>{
      this.loading = false
      this.productId=res
    },error=>{
      this.loading = false
      alert(error)
    })

  }



}
