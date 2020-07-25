import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DeleteReviewDialogData {
  reviewId: string;
}

@Component({
  templateUrl: './delete-review-dialog.html',
  styleUrls: ['./delete-review-dialog.css']
})
export class DeleteReviewDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteReviewDialogData) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
