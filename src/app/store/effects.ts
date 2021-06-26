import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of, zip} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {
  LoadSearchInSpotifyAction, LoadSearchInSpotifyFailedAction, LoadSearchInSpotifySuccessAction
} from '.';
import {SpotifyApiService} from '../shared/services/spotify-api.service';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private apiSrv: SpotifyApiService) {
  }


  @Effect()
  getSpotifySearch$: Observable<Action> = this.actions$.pipe(
    ofType(LoadSearchInSpotifyAction),
    mergeMap(({params}) =>
      this.apiSrv.searchInSpotify({params}).pipe(
        map((resultSearch: any) => {
          return LoadSearchInSpotifySuccessAction({resultSearch});
        }),
        catchError((error) =>
          of(LoadSearchInSpotifyFailedAction()))
      )
    ));
}
