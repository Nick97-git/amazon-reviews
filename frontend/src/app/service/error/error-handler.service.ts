import {Injectable} from '@angular/core';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() {
  }

  handleError(error) {
    if (error['error']['error']) {
      return throwError(error['error']['error']);
    }
    return throwError(error['error']['errors']);
  }
}
