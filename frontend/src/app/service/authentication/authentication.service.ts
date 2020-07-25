import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {UserLoginDto} from "../../model/user-login-dto";
import {UserRegistrationDto} from "../../model/user-registration-dto";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {ErrorHandlerService} from "../error/error-handler.service";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private httpClient: HttpClient,
              private errorHandlerService: ErrorHandlerService) {

  }

  login(user: UserLoginDto): Observable<any> {
    return this.httpClient.post(environment.url + '/login', user)
      .pipe(tap(res => this.setSession(res)),
        catchError(this.errorHandlerService.handleError));
  }

  register(user: UserRegistrationDto) {
    return this.httpClient.post(environment.url + '/registration', user)
      .pipe(tap(res => res), catchError(this.errorHandlerService.handleError))
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  }

  private setSession(authResult) {
    localStorage.setItem('token', authResult['token'])
    localStorage.setItem('roles', authResult['roles'])
  }
}
