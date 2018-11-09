import { Injectable } from '@angular/core'    // angular-7-registration-login-example
import { HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from '../_server/auth.service'

@Injectable()
export class JwtIntercepor implements HttpInterceptor {

    constructor(private AuthService: AuthService){

        console.log('help interceptor....')
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentAuth = this.AuthService.currentAuth
        console.log(currentAuth)
        if(currentAuth && currentAuth.token){
            request = request.clone({
                setHeaders: {
                    Authorization: currentAuth.token
                }
            })
        }
        return next.handle(request)
    }
}
