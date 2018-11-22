import { Component, OnInit } from '@angular/core'

import * as Rx from 'rxjs'
import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax'
import { map, flatMap, repeat, scan, reduce, delay, debounce, throttle } from 'rxjs/operators'

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        function extend<T, U>(first: T, second: U): T & U {
            let result = <T & U>{}
            for (let id in first) {
                ;(<any>result)[id] = first[id]
            }
            for (let id in second) {
                if (!result.hasOwnProperty(id)) {
                    ;(<any>result)[id] = second[id]
                }
            }
            return result
        }

        const ob = Rx.Observable.create(observer => {
            observer.next(1)
            observer.next(5)
            observer.next(10)
            setTimeout(() => {
                observer.next(20)
            }, 2000)
            observer.complete()
        })
        ob.subscribe({
            next: v => console.log(v),
            complete: () => console.log('complete')
        })

        const observable = Rx.from(
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('have not thing....')
                }, 0)
            })
        )

        const subscription = observable
            .pipe(
                map((value, index) => {
                    return value
                })
            )
            .subscribe(x => console.log(x), e => console.log(e))

        const subject = new Rx.Subject()
        subject.next(5555)
        subject.subscribe({
            next: value => console.log('observer A ' + value),
            complete: () => console.log('complete')
        })
        subject.subscribe({
            next: value => console.log('observer B ' + value),
            complete: () => console.log('complete')
        })

        const subjects = new Rx.BehaviorSubject(0)
        subjects.next(7777)
        subjects.subscribe({
            next: x => console.log('observer C ' + x),
            complete: () => console.log('complete...')
        })
        subjects.subscribe({
            next: x => console.log('observer D ' + x),
            complete: () => console.log('complete...')
        })
        subjects.next(8888)

        const subjectAsync = new Rx.AsyncSubject()
        let delayRange = Rx.range(0, 5).pipe(delay(4000))
        delayRange.subscribe(subjectAsync)
        subjectAsync.subscribe({
            next: x => console.log('observer E ' + x),
            complete: () => console.log('complete...')
        })


        const handleFrom = Rx.fromEvent(document.querySelector('.movie'), 'click')
        const Event = handleFrom.pipe(debounce(() => Rx.interval(1000)))
        Event.subscribe({
            next: event => console.log(event),
            complete: () => console.log('handle complete...')
        })

        /*
        AsyncSubject emit the last value of a sequence only if the sequence completed. This value is then cached forever, and any other Observer that subscribes after the value has been emmitted will receive it right away.
        AsyncSubject is convenient for asynchronous operations that return a single value, such as Ajax requests.
        */

        function getProducts(url) {
            var subject
            return Rx.Observable.create(function(observer) {
                //If first time, then create AsyncSubject
                if (!subject) {
                    subject = new Rx.AsyncSubject()
                    //Subscribe to subject
                    ajax.get(url).subscribe(subject)
                }
                //If subject already exists, then just subscribe observer
                return subject.subscribe(observer)
            })
        }

        var products = getProducts('/assets/movie.json')

        // Will trigger request and receive the response when read
        // if again get result will immediately return because it is cached
        products.subscribe({
            next: result => console.log(result.response),
            complete: () => console.log('product complete...'),
            error: e => console.log(e)
        })
    }
}
