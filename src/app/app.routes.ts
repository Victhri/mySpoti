import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'category', component: CategoryPageComponent }
];
