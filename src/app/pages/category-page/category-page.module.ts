import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [CategoryPageComponent],
  imports: [
    CommonModule,
    NgFor,
    RouterLink
  ]
})
export class CategoryPageModule { }
