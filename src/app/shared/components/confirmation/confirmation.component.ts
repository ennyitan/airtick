import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef : MatDialogRef<ConfirmationComponent>
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close(false)
  }

  okay() {
    this.dialogRef.close(true)
  }

}
