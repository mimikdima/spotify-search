import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() searchResult: any;
  @Input() type: string = '';
  sortKey: any;
  sortOrder: number = 1;

  sortField: string = 'popularity';

  noCoverImage = 'https://cdn.dribbble.com/users/80243/screenshots/638952/cover-art.png';

  constructor() { }

  sortOptions = [
    {label: 'Name From A-Z', value: 'name'},
    {label: 'Name From Z-A', value: '!name'}
  ];


  ngOnInit() {
  }



  onSortChange(event: any) {
    let key = event.value.replace('!', '');
    if (event.value.indexOf('!') > -1) {
      this.searchResult = this.searchResult.slice().sort((a: any, b: any) => (a[key].toLowerCase() > b[key].toLowerCase() ? -1 : 1));
    } else {
      this.searchResult = this.searchResult.slice().sort((a: any, b: any) => (a[key].toLowerCase() < b[key].toLowerCase() ? -1 : 1));
    }
  }

  filter(dv: any, value: string) {
    return dv.filter(value);
  }

}
