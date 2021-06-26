import {createAction, props} from '@ngrx/store';

export enum SpotifyActionTypes {
  LoadSearchInSpotify = 'LoadSearchInSpotify',
  LoadSearchInSpotifySuccess = 'LoadSearchInSpotifySuccess',
  LoadSearchInSpotifyFailed = 'LoadSearchInSpotifyFailed'
}

export const LoadSearchInSpotifyAction = createAction(SpotifyActionTypes.LoadSearchInSpotify, props<{params: string}>());
export const LoadSearchInSpotifySuccessAction = createAction(SpotifyActionTypes.LoadSearchInSpotifySuccess, props<{
  resultSearch: any
}>());
export const LoadSearchInSpotifyFailedAction = createAction(SpotifyActionTypes.LoadSearchInSpotifyFailed);
