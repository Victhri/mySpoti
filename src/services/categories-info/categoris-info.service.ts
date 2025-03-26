import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesInfoService {
  constructor(private http: HttpClient) { }

  getCategoriesInfo(): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/browse/categories`);
  }

  getCategoryInfo( categoryId: string): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/browse/categories/${categoryId}`);
  }
}
