import { Component, OnInit } from '@angular/core';

import { AccessTokenService } from '../services/access-token/access-token.service';


@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-spotify';

  constructor(private accessTokenService: AccessTokenService) {}

  ngOnInit() {
    this.accessTokenService.getToken().subscribe(
      (response: any) => {
        localStorage.setItem('spotify_access_token', response.access_token);
    })
  }
}
