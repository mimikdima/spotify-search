import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {TooltipModule} from "primeng/tooltip";
import {TabViewModule} from 'primeng/tabview';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {BlockUIModule} from 'primeng/blockui';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ProgressSpinnerModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    RatingModule,
    TooltipModule,
    TabViewModule,
    BlockUIModule
  ],
  exports: [
    TableModule,
    DialogModule,
    ProgressSpinnerModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    RatingModule,
    TooltipModule,
    TabViewModule,
    BlockUIModule,
    SpinnerComponent
  ],
  providers: []
})

export class SharedModule {}
