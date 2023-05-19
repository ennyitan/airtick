import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = "password"
  icon = "fa-eye-slash"
  openEye :boolean = false
  constructor(
    private route : Router,
  ) { }
    loginForm! : FormGroup
  ngOnInit(): void {
    this.createForm()
  }

  loginToPortal(data : any) {
   
  }

  createForm() {
    this.loginForm = new FormGroup({
      email : new FormControl('',[ Validators.email, Validators.required]),
      password : new FormControl('',[ Validators.required])

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

  login(){
   const users =  JSON.parse(localStorage.getItem('accountDetails')!)
   console.log(users)
   if(this.loginForm.value.email == users?.email && this.loginForm.value.password == users?.password){
    console.log('login Success ')
   }else {
    console.log('commot bosy')
   }
  }
}
