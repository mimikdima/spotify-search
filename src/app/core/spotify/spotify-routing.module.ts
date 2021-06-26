import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchEngineComponent} from './search-engine/search-engine/search-engine.component';

const routes: Routes = [
    {path: '', component: SearchEngineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotifyRoutingModule {}
