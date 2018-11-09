import { Component, Optional, OnInit } from '@angular/core'
import { MusicService } from './music.service'

interface Record {
    name: string
    cover: string
    quantity: number
}

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

    private color: string
    private records: Record[]

    constructor(@Optional() protected musicService: MusicService){

        musicService.fetch()
        .then((data) => {
            this.records = data
        })
    }

    ngOnInit() {}

    handleCreate(){

    }
}
