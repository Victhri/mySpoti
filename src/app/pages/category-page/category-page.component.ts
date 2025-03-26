import { Component, OnInit } from '@angular/core';
import { CategoriesInfoService } from '../../../services/categories-info/categoris-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  standalone: false,
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent implements OnInit{
  constructor(private categories: CategoriesInfoService, private route: ActivatedRoute ) {}
  public data: any;
  private categoryId: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
    });

    this.categories.getCategoryInfo(this.categoryId).subscribe(data => {
    this.data = data;
    })
  }
}
