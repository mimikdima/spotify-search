import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() item: any;
  @Input() noCoverImage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getPopularityStar(popularity: number) {
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
