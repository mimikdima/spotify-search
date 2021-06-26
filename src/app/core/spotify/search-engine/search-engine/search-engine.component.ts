import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromSpotify from '../../../../store';
import {isLoading, spotifySearch} from '../../../../store';
import {SpotifyApiService} from '../../../../shared/services/spotify-api.service';
import {takeUntil, tap} from 'rxjs/operators';
import {CommonService} from "../../../../shared/services/common.service";
import {
  ISpotifyAlbumsData,
  ISpotifyArtistsData,
  ISpotifyTracksData
} from "../../../../shared/interfaces/spotify-search-result.interface";

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit, OnDestroy {


  showResults = false;
  searchResultArtists: ISpotifyArtistsData | undefined;
  searchResultAlbums: ISpotifyAlbumsData | undefined;
  searchResultTracks: ISpotifyTracksData | undefined;
  private onDestroy$ = new Subject();

  constructor(private apiSrv: SpotifyApiService,
              private store: Store<fromSpotify.SpotifyState>) { }

  ngOnInit(): void {
    this.store.select(fromSpotify.spotifySearch)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(res => {
        if (res) {
          console.log(res.resultSearch);
          this.searchResultAlbums  = res.resultSearch.albums.items.slice();
          this.searchResultArtists = res.resultSearch.artists.items.slice();
          this.searchResultTracks  = res.resultSearch.tracks.items.slice();

          this.showResults = true;
        }
      });
  }


  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
