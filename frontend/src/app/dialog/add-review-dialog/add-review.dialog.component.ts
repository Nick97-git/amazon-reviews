import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface AddReviewDialogData {
  summary: string;
  text: string;
  productId: string;
}

@Component({
  templateUrl: './add-review-dialog.html',
  styleUrls: ['./add-review-dialog.css']
})

export class AddReviewDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddReviewDialogData) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
