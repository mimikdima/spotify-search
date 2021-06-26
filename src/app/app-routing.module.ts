import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SpotifyComponent} from './core/spotify/spotify.component';

const routes: Routes = [
    { path: '',
      component: SpotifyComponent,
      loadChildren: () => import('./core/spotify/spotify.module').then(m => m.SpotifyModule)
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
