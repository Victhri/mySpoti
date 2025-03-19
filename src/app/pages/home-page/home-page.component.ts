import { Component } from '@angular/core';
import { CategoriesInfoService } from '../../../services/categories-info/categoris-info.service';

@Component({
  selector: 'spoti-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public topCategories: any[] = [];
  constructor(private categories: CategoriesInfoService) {
      const token = localStorage.getItem('spotify_access_token');
      if(token) {
        this.categories.getCategoriesInfo(token).subscribe(data => {
        this.topCategories = data.categories.items; 
        })
      }
  }
}
