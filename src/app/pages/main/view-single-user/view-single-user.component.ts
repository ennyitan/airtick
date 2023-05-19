import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UsersService } from 'src/app/core/users.service';
import { AppStateInterface } from 'src/app/store/appStateInterface';
import { userSelector } from 'src/app/store/selector';

@Component({
  selector: 'app-view-single-user',
  templateUrl: './view-single-user.component.html',
  styleUrls: ['./view-single-user.component.css']
})
export class ViewSingleUserComponent implements OnInit {
  users$ = this.appStore.pipe(select(userSelector));

id : any
user : any
  constructor( private router: Router,
    private appStore: Store<AppStateInterface>,
    private store: Store,
    private userService: UsersService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.user = this.userService.getUserById(this.id)
  }

}
