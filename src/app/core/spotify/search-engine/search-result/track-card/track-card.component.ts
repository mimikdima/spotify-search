import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ISpotifyTracksData} from "../../../../../shared/interfaces/spotify-search-result.interface";

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {

  @Input() item?: ISpotifyTracksData;
  @Input() noCoverImage: string = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getPopularityStar(popularity: any) {
    if(popularity > 0 && popularity < 25) {
      return 1
    }
    else if(popularity >= 25 && popularity < 50) {
      return 2
    }
    else if(popularity >= 50 && popularity < 75) {
      return 3
    }
    else if(popularity >= 75 && popularity < 100) {
      return 4
    }
    else if(popularity === 100) {
      return 5
    } else {
      return 0;
    }
  }
}
