import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(public commonSrv: CommonService) { }

  ngOnInit(): void {
  }

}
