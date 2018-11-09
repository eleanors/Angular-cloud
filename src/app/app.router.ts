import { RouterModule, Routes } from '@angular/router';

import { MusicComponent } from './music/music.component'
import { MovieComponent } from './movie/movie.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


const routes: Routes = [
    { path: 'music', component: MusicComponent },
    { path: 'movie/:id', component: MovieComponent },
    {
        path: 'movie',
        component: MovieComponent,
        data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/music',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
]

export const Router = RouterModule.forRoot(routes, { enableTracing: false })
