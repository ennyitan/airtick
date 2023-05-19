import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() closeDiv = new EventEmitter()
  firstname : string = ""
  lastname : string = ""
  avatar! : string 
  verificationStatus! : boolean 
  constructor(
  ) { }

  ngOnInit(): void {
  
  }

  menuList = [
    {
      title : " Dashboard",
      icon : "fa-home",
      route : "/main"
    },
    {
      title : "All users",
      icon : "fa-book",
      route : "/main/all-users"
    },
    {
      title : "Profile",
      icon : "fa-eye",
      route : "/main/profile"
    },
    {
      title : "Settings",
      icon : "fa-calendar-o",
      route : "/dashboard"
    },
    
  ]

  closeOnClick() {
    this.closeDiv.emit()
  }
}
