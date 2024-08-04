import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SpinerComponent } from './component/spiner/spiner.component';
import { SelectComponent } from './component/select/select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SpinerComponent, SelectComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [HeaderComponent, SpinerComponent, SelectComponent, FormsModule],
})
export class SharedModule {}
