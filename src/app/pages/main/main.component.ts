import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showMenu : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showMenu = ! this.showMenu
    console.log(this.showMenu)
  }

  closeOpenMenu() {
    this.showMenu = false
  } 

}
