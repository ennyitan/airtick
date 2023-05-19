import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleClick = new EventEmitter()
  @Input() iconToggle : Boolean = true
   constructor(
    private router : Router,
   ) { }

  ngOnInit(): void {
  }

  actionBtn() {
    this.toggleClick.emit()
  }

  logOut() {
    localStorage.removeItem('accountDetails')
    this.router.navigate(['/'])
 
  }
}
