import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadSearchInSpotifyAction} from '../../../../store';
import * as fromSpotify from '../../../../store';

@Component({
  selector: 'app-search',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit{

  emptyInput = false;

  constructor(private store: Store<fromSpotify.SpotifyState>) { }

  ngOnInit() {
  }

  search(params: string) {
    if (params.length > 0) {
      this.store.dispatch(LoadSearchInSpotifyAction({params}));
      this.emptyInput = false
    } else {
      this.emptyInput = true;
    }
  }

}
