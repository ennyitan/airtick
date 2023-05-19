import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.formGroup.patchValue({
      address : 'Name'
    })
  }

  confrimationModal() {
    // this.dialog.open(ConfirmationComponent, {
    //   minWidth : "300px",
    //   data : {
    //     message : "Are you sure you want to make this changes to your profile!"
    //   }
    // })

  }

  createForm() {
    this.formGroup = new FormGroup({
      address : new FormControl("", [Validators.required]),
    })
  }
}
