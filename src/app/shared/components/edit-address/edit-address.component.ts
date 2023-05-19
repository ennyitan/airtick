import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog : MatDialog,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createForm()
    console.log(this.data)
    this.formGroup.patchValue({
      address : this.data.address
    })
  }

  confrimationModal() {
    this.dialog.open(ConfirmationComponent, {
      minWidth : "300px",
      data : {
        message : "Are you sure you want to make this changes to your profile!"
      }
    })

  }

  createForm() {
    this.formGroup = new FormGroup({
      address : new FormControl("", [Validators.required]),
    })
  }

}
