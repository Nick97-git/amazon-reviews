import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../service/user/user.service";
import {ProductService} from "../service/product/product.service";
import {ReviewService} from "../service/review/review.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteReviewDialogComponent} from "../dialog/delete-review-dialog/delete-review-dialog.component";
import {ParamsDialogComponent} from "../dialog/params-dialog/params-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  private reviewId: string;
  private limit: number;
  private offset: number;
  readonly displayedColumns: string[] = ['name'];
  arr: string[];
  columnName: string;
  errors: string;
  dataSource: any;

  constructor(private userService: UserService,
              private productService: ProductService,
              private reviewService: ReviewService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit(): void {
    this.arr = [];
  }

  getMostActiveUsers() {
    this.getParamsDialog().afterClosed().subscribe(result => {
      if (result) {
        this.initData(result, 'Profile name');
        this.userService.getMostActiveUsers(this.limit, this.offset).subscribe(
          res => this.upgradeTable(res.map(item => item['profileName']))
        );
        this.clearData();
      }
    });
  }

  getMostCommentedProducts() {
    this.getParamsDialog().afterClosed().subscribe(result => {
      if (result) {
        this.initData(result, 'Product ID');
        this.productService.getMostCommentedProducts(this.limit, this.offset).subscribe(
          res => this.upgradeTable(res.map(item => item['id']))
        );
        this.clearData();
      }
    });
  }

  getMostUsedWords() {
    this.getParamsDialog().afterClosed().subscribe(result => {
      if (result) {
        this.initData(result, 'Word');
        this.reviewService.getMostUsedWords(this.limit, this.offset).subscribe(
          res => this.upgradeTable(res)
        );
        this.clearData();
      }
    });
  }

  isAdmin() {
    return localStorage.getItem('roles').indexOf("ADMIN") != -1;
  }

  getParamsDialog() {
    this.errors = "";
    return this.dialog.open(ParamsDialogComponent, {
      width: '220px',
      data: {limit: this.limit, offset: this.offset}
    });
  }

  openDeleteReviewDialog() {
    this.errors = "";
    const dialog = this.dialog.open(DeleteReviewDialogComponent, {
      width: '220px',
      data: {reviewId: this.reviewId}
    });

    dialog.afterClosed().subscribe(result => {
      this.reviewId = result;
      if (this.reviewId) {
        this.reviewService.deleteReviewById(this.reviewId)
          .subscribe(res => res, error => this.errors = error)
      }
    });
  }

  hideTable() {
    this.arr = [];
  }

  private clearData() {
    this.limit = null;
    this.offset = null;
  }

  private checkInputData(limit: number, offset: number) {
    if (!limit || limit < 1) {
      this.limit = 1;
    }
    if (!offset || offset < 0) {
      this.offset = 0;
    }
  }

  private initData(result: any, columnName: string) {
    this.limit = result[0];
    this.offset = result[1];
    this.checkInputData(this.limit, this.offset);
    this.columnName = columnName;
  }

  private upgradeTable(data: string[]) {
    this.arr = data;
    this.dataSource = new MatTableDataSource(this.arr);
    this.paginator.pageIndex = 0;
    this.dataSource.paginator = this.paginator;
  }
}

