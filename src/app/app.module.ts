import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { MusicComponent } from './music/music.component'
import { MovieComponent } from './movie/movie.component'
import { MusicModule } from './music/music.module'

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

@NgModule({
    declarations: [AppComponent, MusicComponent, MovieComponent, PageNotFoundComponent],
    imports: [RouterModule.forRoot(routes, { enableTracing: false }), BrowserModule, MusicModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}



/*
    ng g cl my-new-class        // 新建 class
    ng g c my-new-component     // 新建组件
    ng g d my-new-directive     // 新建指令
    ng g e my-new-enum          // 新建枚举
    ng g m my-new-module        // 新建模块
    ng g p my-new-pipe          // 新建管道
    ng g s my-new-service       // 新建服务
 */
