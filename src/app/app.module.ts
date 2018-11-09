import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

// help
import { JwtIntercepor } from './_helper/auth.interceptor'
import { ErrorInterceptor } from './_helper/error.interceptor'

// module
import { MusicModule } from './music/music.module'
import { MovieModule } from './movie/movie.module'
import { Router } from './app.router'

// component
import { AppComponent } from './app.component'
import { MusicComponent } from './music/music.component'
import { MovieComponent } from './movie/movie.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


@NgModule({
    declarations: [AppComponent, MusicComponent, MovieComponent, PageNotFoundComponent],
    imports: [Router, BrowserModule, MusicModule, MovieModule],
    providers: [{
        provide: HTTP_INTERCEPTORS, useClass: JwtIntercepor, multi: true
    }, {
        provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }],
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
