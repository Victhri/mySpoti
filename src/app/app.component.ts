import { Component, OnInit } from '@angular/core';
import { SpotifyAuthService } from '../services/authentication-token/spotify-auth.service';
import { CategoriesInfoService } from '../services/categories-info/categoris-info.service';


@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-spotify';

  constructor(private spotifyAuthService: SpotifyAuthService, private categories: CategoriesInfoService) {}

  ngOnInit() {
    this.spotifyAuthService.getToken().subscribe(
      (response: any) => {
        localStorage.setItem('spotify_access_token', response.access_token);
    })
  }
}
