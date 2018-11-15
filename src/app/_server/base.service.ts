import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface params {
    msg: string
    data: object | []
    code: number
}

interface fetchParam {
    url: string
    method: string
    params?: object
}

const baseurl = 'http://localhost:4200/'

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor(private http: HttpClient) {}

    params(data: object): string {
        let url = ''
        for (let key in data) {
            const value = data[key] ? data[key] : ''
            url += `&${key}=${encodeURIComponent(value)}`
        }
        return url
    }

    get(url: string, params?: object, header?: any): Observable<any> {
        const iheader = new HttpHeaders()
        for (let key in header) {
            iheader.append(key, header[key])
        }
        if(params){
            url += url.indexOf('?') == -1 ? '?' : '&' + this.params(params)
        }
        return this.http.get(url, { headers: iheader }).pipe(
            map(res => {
                return res
            })
        )
    }

    post(url: string, params?: any, header?: any): Observable<any> {
        const iheader = new HttpHeaders()
        iheader.append('Content-Type', 'application/json')
        for (let key in header) {
            iheader.append(key, header[key])
        }
        return this.http.post(url, params, { headers: iheader })
    }

    fetch(options?:fetchParam, params?: any, header?: any): Observable<any>{
        if(options.method == 'get'){
            return this.get(baseurl + options.url, header)
        }else if(options.method == 'post'){
            return this.post(baseurl + options.url, params, header)
        }
    }

    exception(error: object): void{
        console.log(error)
    }
}
