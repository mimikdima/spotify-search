import {LoadSearchInSpotifyAction, LoadSearchInSpotifyFailedAction, LoadSearchInSpotifySuccessAction} from './actions';
import {createReducer, on} from '@ngrx/store';

export interface SpotifyState {
  spotifySearch: any;
  isLoading: boolean;
}

const initialState: SpotifyState = {
  spotifySearch: null,
  isLoading: false
};

const reducer = createReducer(
  initialState,
  on(LoadSearchInSpotifyAction, (state, {params}) => ({ ...state, isLoading: true, params})),
  on(LoadSearchInSpotifySuccessAction, (state, {resultSearch}) => ({
    ...state,
    isLoading: true,
    spotifySearch: {resultSearch}
  })),
  on(LoadSearchInSpotifyFailedAction, state => ({ ...state, isLoading: false}))
);

export function reducerCreator(state: SpotifyState = initialState, action: any): SpotifyState {
  return reducer(state, action);
}
