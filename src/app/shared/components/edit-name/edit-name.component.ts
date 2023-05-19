import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
  formGroup!: FormGroup
  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    // private dialog : MatDialog,
    private router : Router

  ) { }

  ngOnInit(): void {
    // console.log(this.data)
    // this.createForm()
    // this.formGroup.patchValue({
    //   firstname : this.data.firstname,
    //   lastname : this.data.lastname
    // })

  }

  confrimationModal() {
    // this.dialog.open(ConfirmationComponent, {
    //   minWidth : "300px",
    //   data : {
    //     message : "Are you sure you want to change your name!"
    //   }
    // })

  }

  createForm() {
    this.formGroup = new FormGroup({
      firstname : new FormControl("", [Validators.required]),
      lastname : new FormControl("", Validators.required)
    })
  }

}
