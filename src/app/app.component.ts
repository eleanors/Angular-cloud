import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Subscriber, Subscription, Subscribable, Subject, Scheduler, Notification } from 'rxjs'

@Component({
    selector: 'app-container',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    color: string
    public title = 'Angular'
    protected subscription: Subscription

    constructor(protected route: ActivatedRoute) {
        this.subscription = this.route.queryParams.subscribe((param: any) => {
            if (param.name) {
            }
        })
    }

    ngOnInit() {
        console.log('app init...')
    }
}
