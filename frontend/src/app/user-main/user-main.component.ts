import {Component, OnInit} from '@angular/core';
import {ReviewService} from "../service/review/review.service";
import {ReviewRequestDto} from "../model/review-request-dto";
import {ReviewUpdateDto} from "../model/review-update-dto";
import {MatDialog} from "@angular/material/dialog";
import {AddReviewDialogComponent} from "../dialog/add-review-dialog/add-review.dialog.component";
import {UpdateReviewDialogComponent} from "../dialog/update-review-dialog/update-review-dialog.component";

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})

export class UserMainComponent implements OnInit {
  private text: string;
  private summary: string;
  private productId: string;
  errors: string;

  constructor(private reviewService: ReviewService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  openAddReviewDialog() {
    this.errors = ""
    const dialog = this.dialog.open(AddReviewDialogComponent, {
      width: '230px',
      data: {summary: this.summary, text: this.text, productId: this.productId}
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.reviewService.addReview(new ReviewRequestDto(result[0],
          result[1], result[2])).subscribe(
          res => res,
          error => this.errors = error);
      }
    });
  }

  openUpdateReviewDialog() {
    this.errors = ""
    const dialog = this.dialog.open(UpdateReviewDialogComponent, {
      width: '230px',
      data: {summary: this.summary, text: this.text}
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.reviewService.updateReview(new ReviewUpdateDto(result[0], result[1]))
          .subscribe(
            res => res,
            error => this.errors = error);
      }
    });
  }

  isUser() {
    return localStorage.getItem('roles').indexOf("USER") != -1;
  }
}
