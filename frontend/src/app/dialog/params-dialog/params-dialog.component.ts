import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface ParamsDialogData {
  limit: number;
  offset: number;
}

@Component({
  templateUrl: './params-dialog.html',
  styleUrls: ['./params-dialog.css']
})

export class ParamsDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ParamsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ParamsDialogData) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
