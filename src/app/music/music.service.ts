import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    private list = []
    constructor() {
        console.log('music server...')
    }

    create(id: number){
        this.list.push(id)
    }

    async fetch(){
        let result = [{
            name: 'A',
            cover: 'cover',
            quantity: 99
        }, {
            name: 'B',
            cover: 'cover',
            quantity: 100
        }]
        return result
    }
}
