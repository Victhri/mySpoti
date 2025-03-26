import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesInfoService } from '../../../services/categories-info/categoris-info.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Subject, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-category-page',
  standalone: false,
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  constructor(private categoriesInfoService: CategoriesInfoService, private route: ActivatedRoute ) {}

  public category: any;
  public playlists: any;
  private categoryId: any;
  private destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
    });

    this.categoriesInfoService.getCategoryInfo(this.categoryId)
      .pipe(
        switchMap((categoryData) => {
          this.category = categoryData;
          return this.categoriesInfoService.getCategoryPlaylists(categoryData.name);
        })
      )
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((playlistsData) => {
        this.playlists = playlistsData.playlists.items;
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
