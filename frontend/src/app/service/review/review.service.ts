import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ReviewRequestDto} from "../../model/review-request-dto";
import {ReviewUpdateDto} from "../../model/review-update-dto";
import {catchError, tap} from "rxjs/operators";
import {ErrorHandlerService} from "../error/error-handler.service";

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  constructor(private httpClient: HttpClient,
              private errorHandlerService: ErrorHandlerService) {
  }

  getMostUsedWords(limit: number, offset: number) {
    let params = new HttpParams();
    params = params.append('limit', limit.toString());
    params = params.append('offset', offset.toString());
    return this.httpClient.get<string[]>(environment.url + "/reviews", {params});
  }

  deleteReviewById(reviewId: string) {
    return this.httpClient.delete(environment.url + "/reviews/" + reviewId)
      .pipe(tap(res => res), catchError(this.errorHandlerService.handleError))
  }

  updateReview(review: ReviewUpdateDto) {
    return this.httpClient.put(environment.url + "/reviews", review)
      .pipe(tap(res => res), catchError(this.errorHandlerService.handleError))
  }

  addReview(review: ReviewRequestDto) {
    return this.httpClient.post(environment.url + "/reviews", review)
      .pipe(tap(res => res), catchError(this.errorHandlerService.handleError))
  }
}
