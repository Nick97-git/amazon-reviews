import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface UpdateReviewDialogData {
  summary: string;
  text: string;
}

@Component({
  templateUrl: './update-review-dialog.html',
  styleUrls: ['./update-review-dialog.css']
})

export class UpdateReviewDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateReviewDialogData) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
