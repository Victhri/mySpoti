import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthTokenService } from '../../../services/tokens/auth-token.service';
import { delay, take } from 'rxjs';

@Component({
  selector: 'app-callback',
  standalone: false,
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent {
  constructor(
    private route: ActivatedRoute,
    private authToken: AuthTokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.authToken.getToken(code)
          .pipe(take(1), delay(1500)).subscribe(
            (response: any) => {
              localStorage.setItem('spotify_auth_token', response.access_token);
              localStorage.setItem('spotify_refresh_token', response.refresh_token);
              localStorage.setItem('spotify_expires_in_auth_token', response.expires_in);
              this.router.navigate(['/']);
          })
        }
      });
    }
}
