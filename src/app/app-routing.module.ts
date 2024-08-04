import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './products/components/all-product/all-product.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:'product',component:AllProductComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'**',redirectTo:'product',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
