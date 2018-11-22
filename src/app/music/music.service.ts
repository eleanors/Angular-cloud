import { Injectable } from '@angular/core'
import { BaseService } from '../_server/base.service'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    private list = []
    constructor(private fetch:BaseService) {
        console.log('music server...')
        console.log(this.fetch)
    }

    create(id: number){
        this.list.push(id)
    }

    fetchMusicList(): Observable<any> {
        let result = []
        return this.fetch.fetch({
            url: 'assets/movie.json',
            method: 'get'
        }).pipe(map(value => {
            console.log(value.msg)
            return value.data
        }))
    }

    fetchRecommendList(): Promise<any> {
        return this.fetch.fetch({
            url: 'assets/movie.json',
            method: 'get'
        }).toPromise()
    }
}
