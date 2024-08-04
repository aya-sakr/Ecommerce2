import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProduct: any[] = [];
  total:any =0
  index:number=0
  success:boolean=false
  constructor(private service: CartService) {}
  ngOnInit(): void {
  this.getCartProduct()
  }
  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);

      this. getCardTotal()
    }

  }
 getCardTotal(){
  this.total =0
  for(let x in this.cartProduct){

    this.total += this.cartProduct[x].product.price * this.cartProduct[x].quantity

  }
  console.log(this.total)


 }
 mins(index:any){
  this.cartProduct[index].quantity--
  this.getCardTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))


 }
 blus(index:number){
  this.cartProduct[index].quantity++
  this.getCardTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))



 }
 detectChange(){
  this.getCardTotal()

  localStorage.setItem("cart",JSON.stringify(this.cartProduct))

 }
 deletItem(){
  this.cartProduct.splice(this.index , 1)
  this.getCardTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))

 }
 clearData(){
  this.cartProduct = []
  this.getCardTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))

 }
 addCart(){
  let products = this.cartProduct.map(item =>{
    return {productId:item.product.id,quantity:item.quantity}
  })
  let model ={
    userId:5,
    date: new Date(),
    products: products
  }
  this.service.getCartPrd(model).subscribe(res=>{
    this.success = true
  })

 }

}

