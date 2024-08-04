import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent implements OnInit {
  products: any[] = [];
  productCateg: any[] = [];
  cartProduct:any[]=[]
  loading:boolean=false
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading =true
    this.service.getAllProduct().subscribe((res: any) => {
      this.loading=false
      this.products = res;
      console.log(res);
    });
  }
  getCategories() {
    this.loading =true

    this.service.getAllCateg().subscribe((result: any) => {
      this.loading=false

      this.productCateg = result;
      console.log(result);
    });
  }
  getFilterCateg(event: any) {

    let filter = event.target.value;
    (filter == 'All')?this.getProducts() : this.getProductByCategory(filter);
    console.log(filter);

  }
  getProductByCategory(keyword: string) {
    this.loading =true

    this.service.getProductByCateg(keyword).subscribe((value: any) => {
    this.loading =false

      this.products = value;
    });
  }
  addToCard(event:any){
    if("cart" in localStorage){

      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProduct.find(item => item.product.id == event.product.id)
      if(exist){
        alert('the product ia already exists')
      }else{
        this.cartProduct.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProduct))


      }

    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProduct))


    }


  }
}
