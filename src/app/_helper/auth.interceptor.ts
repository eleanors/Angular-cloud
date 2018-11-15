import { Injectable } from '@angular/core' // angular-7-registration-login-example
import { HttpHandler, HttpEvent, HttpErrorResponse, HttpRequest, HttpResponse, HttpInterceptor } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { AuthService } from '../_server/auth.service'

@Injectable()
export class JwtIntercepor implements HttpInterceptor {

    constructor(private AuthService: AuthService) {
        console.log('help interceptor....')
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentAuth = this.AuthService.currentAuth
        if (currentAuth && currentAuth.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: currentAuth.token
                }
            })
        }
        return next.handle(request).pipe(retry(2), catchError(this.handleError))
    }

    private handleError(error: HttpErrorResponse){

        return throwError(error.message)
    }
}
