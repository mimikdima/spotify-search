import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SpotifyComponent} from './spotify.component';
import {SpotifyRoutingModule} from './spotify-routing.module';
import {SearchEngineComponent} from './search-engine/search-engine/search-engine.component';

import {SharedModule} from '../../shared/shared.module';
import { SearchFormComponent } from './search-engine/search-form/search-form.component';
import { SearchResultComponent } from './search-engine/search-result/search-result.component';
import { ArtistCardComponent } from './search-engine/search-result/artist-card/artist-card.component';
import { AlbumCardComponent } from './search-engine/search-result/album-card/album-card.component';
import { TrackCardComponent } from './search-engine/search-result/track-card/track-card.component';

@NgModule({
  declarations: [
    SpotifyComponent,
    SearchEngineComponent,
    SearchFormComponent,
    SearchResultComponent,
    ArtistCardComponent,
    AlbumCardComponent,
    TrackCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpotifyRoutingModule,
    SharedModule,
  ],
  exports: [

  ],
  providers: []
})

export class SpotifyModule {}
