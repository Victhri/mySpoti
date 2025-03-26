import { Component, OnInit } from '@angular/core';
import { CategoriesInfoService } from '../../../services/categories-info/categoris-info.service';

@Component({
  selector: 'spoti-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public topCategories: any[] = [];
  constructor(private categories: CategoriesInfoService) {}

  ngOnInit(): void {
      this.categories.getCategoriesInfo().subscribe(data => {
      this.topCategories = data.categories.items; 
      })
    } 
}
