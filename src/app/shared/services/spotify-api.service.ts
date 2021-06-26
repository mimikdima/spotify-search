import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ISpotifySearchResult} from '../interfaces/spotify-search-result.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  private domain = 'https://api.spotify.com/v1';

  clientId = '53dfc843a74e4b89a5f8bc9e45af640e';
  clientSecret = '62a7e715936c47a6aee5306358936a2d';
  accessToken!: string;

  constructor(private http: HttpClient) {
    this.getToken();
  }

  getRequest(path: string): Observable<any> {
    const header: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });
    return this.http.get<any>(this.domain + path, {headers: header}).pipe(catchError(this.handleError));
  }

  getToken(): any {
    const header: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = 'grant_type=client_credentials';
    this.http
      .post<any>(`https://accounts.spotify.com/api/token`, body, {
        headers: header,
      })
      .subscribe((token: any) => {
        return this.accessToken = token.access_token;
      });
  }

  handleError(error: HttpErrorResponse): any {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  searchInSpotify(params: any): Observable<ISpotifySearchResult> {
    return this.getRequest(`/search?q=${encodeURIComponent(params.params)}&type=track,artist,album`);
  }

}
