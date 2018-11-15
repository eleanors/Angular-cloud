import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BaseService } from '../_server/base.service'

import { map } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs'

import { UserMode } from '../_model/user.model'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public  authContent: Observable<UserMode>
    private authSubject: BehaviorSubject<UserMode>

    constructor(private http: BaseService) {
        this.authSubject = new BehaviorSubject<UserMode>({ id: 1000, username: 'es', token: 'z5ec4n8u5ek' })
        this.authContent = this.authSubject.asObservable()
    }

    public get currentAuth(): UserMode {
        return this.authSubject.value
    }

    login(username: string, password: number): Observable<any>{
        return this.http.fetch({
            method: 'post',
            url: 'auth/login.json'
        }, {username, password})
        .pipe(map(user => {
            if(user && user.token){
                // todo...save data to local
                this.authSubject.next(user)
            }
            return user
        }))
    }

    exit(){
        this.authSubject.next(null)
    }
}
