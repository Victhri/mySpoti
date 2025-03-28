import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesInfoService } from '../../../services/categories-info/categoris-info.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'spoti-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit, OnDestroy {
  public topCategories: any[] = [];
  private destroy$ = new Subject<void>();
  constructor(private categories: CategoriesInfoService) {}

  ngOnInit(): void {
    this.categories.getCategoriesInfo()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(data => {
      this.topCategories = data.categories.items; 
    })
  } 
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
