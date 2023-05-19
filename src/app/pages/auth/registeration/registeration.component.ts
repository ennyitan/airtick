import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  regForm! : FormGroup
  icon = "fa-eye-slash"
  password = "password"
  openEye : boolean = false
  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  Register(data: any) {
  
  }
  createForm() {
    this.regForm = new FormGroup({
      firstname : new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname : new FormControl('', [Validators.required, Validators.minLength(3)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),

    })
  }

  toggleIconShow() {
    this.openEye = !this.openEye
    if(!this.openEye) {
      this.icon = "fa-eye"
      this.password = "text"
    } else {
      this.password = "password"
      this.icon = "fa-eye-slash"
    }
  }

  createAccount() {
    localStorage.setItem('accountDetails', JSON.stringify(this.regForm.value))
    this.route.navigateByUrl('/')
  }
}
