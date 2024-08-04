import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProduct() {
    return this.http.get(environment.apiUrl + 'products');
  }
getAllCateg(){
  return this.http.get(environment.apiUrl + 'products/categories')
}
getProductByCateg(keyword:string){
  return this.http.get(environment.apiUrl + 'products/category/'+ keyword)

}
getProductById(id:number){
  return this.http.get(environment.apiUrl + 'products/'+ id)

}
}
