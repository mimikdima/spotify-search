import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private _spinner = false;

  startSpinner() {
    this._spinner = true;
  }

  stopSpinner() {
    this._spinner = false;
  }

  get spinner() {
    return this._spinner;
  }
}
