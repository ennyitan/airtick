import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-dob',
  templateUrl: './edit-dob.component.html',
  styleUrls: ['./edit-dob.component.css']
})
export class EditDobComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog : MatDialog,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.primeNumber(9)
    console.log(this.data)
    this.formGroup.patchValue({
      birthdate : this.data.dateOfBirth
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
      birthdate : new FormControl("", [Validators.required]),
    })
  }

  primeNumber(n:number) {
    for(let i = 1; i>n; i++) {
      if( (i-1) * i === n) {
        console.log("Not a prime")
      }else {
        console.log("Prime number")
      }
    }
  }
}
