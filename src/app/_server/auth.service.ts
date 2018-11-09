import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs'

import { UserMode } from '../_model/user.model'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public  authContent: Observable<UserMode>
    private authSubject: BehaviorSubject<UserMode>

    constructor(private http: HttpClient) {
        this.authSubject = new BehaviorSubject<UserMode>({ id: 1000, username: 'es', token: 'a5ec4n' })
        this.authContent = this.authSubject.asObservable()
    }

    public get currentAuth(): UserMode {
        return this.authSubject.value
    }

    login(username: string, password: number){
        return this.http.post<any>('', {username, password})
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
