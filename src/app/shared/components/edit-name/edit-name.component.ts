import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
  formGroup!: FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog : MatDialog,

  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.createForm()
    this.formGroup.patchValue({
      firstname : this.data.firstname,
      lastname : this.data.lastname
    })

  }

  confrimationModal() {
    this.dialog.open(ConfirmationComponent, {
      minWidth : "300px",
      data : {
        message : "Are you sure you want to change your name!"
      }
    })

  }

  createForm() {
    this.formGroup = new FormGroup({
      firstname : new FormControl("", [Validators.required]),
      lastname : new FormControl("", Validators.required)
    })
  }
}
