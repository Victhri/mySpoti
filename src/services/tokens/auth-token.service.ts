import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  private clientId = '41214f9127114a028da6a06c673a2446';
  private clientSecret = '034b5a521995422bae629a6c5d8009fe';
  private redirectUri: string = 'http://localhost:4200/callback';
  private authEndpoint: string = 'https://accounts.spotify.com/authorize';
  private tokenEndpoint: string = 'https://accounts.spotify.com/api/token';
  private scope: string = 'user-library-read';


  constructor(private http: HttpClient) { }

  public getAuthorizationUrl(): string {
    const params = new URLSearchParams();
    params.append('response_type', 'code');
    params.append('client_id', this.clientId);
    params.append('scope', this.scope);
    params.append('redirect_uri', this.redirectUri);
    return `${this.authEndpoint}?${params.toString()}`;
  }

  public getToken(code: string): Observable<any> {
    const body = new URLSearchParams();
    body.append('grant_type', 'authorization_code');
    body.append('code', code);
    body.append('redirect_uri', this.redirectUri);

    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`))
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.tokenEndpoint, body.toString(), { headers });
  }

}
