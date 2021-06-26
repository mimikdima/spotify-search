import {Component, Input, OnInit} from '@angular/core';
import {ISpotifyAlbumsData} from "../../../../../shared/interfaces/spotify-search-result.interface";

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() item: any;
  @Input() noCoverImage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
