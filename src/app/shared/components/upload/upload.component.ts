import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  previewImage! : File
  formGroup! : FormGroup
  upload : boolean = true
  file! : File
  constructor(
    // private router : Router,
    // private dialogRef : MatDialogRef<UploadComponent>
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  SelectUploadFile(event: any) {
    if(event.target.files?.length > 0 ) {
      const reader = new FileReader()
      this.file = event.target.files[0]
      reader.onload = (_event : any)=> {
        this.previewImage = _event.target.result
        this.upload = false
      }
      reader.readAsDataURL(event.target.files[0])
    }
    
  }

  createForm() {
    this.formGroup = new FormGroup({
      profileImage : new FormControl("", Validators.required)
    })
  }

  onFileSubmit() {
    const formValue = new FormData()
    console.log(formValue)
    formValue.append("profileImage", this.file)
  }
}
