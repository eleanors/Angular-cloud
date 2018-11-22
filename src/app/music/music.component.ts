import { Component, Optional, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms'
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
export class MusicComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

    public color: string
    private records: Record[]

    bbValue: boolean = true
    allClass: string = 'aa bb cc'
    time: object = new Date()
    e: number = 2.718281828459045

    control: FormControl
    constructor(@Optional() protected musicService: MusicService) {
        this.records = []

        this.control = new FormControl('value', Validators.minLength(2))
    }

    ngOnInit() {
        this.color = 'purple'
        this.musicService.fetchMusicList().subscribe(data => {
            this.records = data
        })
    }

    handlePress(){
        console.log('press...')
        this.setFormValue('new value')
    }

    setFormValue(str: string): void{
        this.control.setValue(str)
    }

    ngOnChanges(){
        console.log('ngOnChanges...')
    }

    ngDoCheck(){
        console.log('ngDoCheck...')
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit...')
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked...')
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit...')
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked...')
    }

    ngOnDestroy(){
        console.log('destroy...')
    }
}


@Component({
    selector: '',
    template: '<input nz-input nzSize="large" placeholder="children component">'
})
class Recommend implements OnInit {

    childMessage: FormControl = new FormControl()

    constructor(argument) {
        // code...
    }

    @Input() public message: string
    @Output() childEvent: EventEmitter<any> = new EventEmitter()

    ngOnInit(){

    }
}
