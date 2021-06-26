import { createFeatureSelector, createSelector } from '@ngrx/store';

import {SpotifyState} from './reducer';

const getSpotifyState = createFeatureSelector<SpotifyState>('users');

export const isLoading = createSelector(getSpotifyState, (state: SpotifyState) => {
  return state.isLoading;
});

export const spotifySearch = createSelector(getSpotifyState, (state: SpotifyState) => {
  return state.spotifySearch;
});
