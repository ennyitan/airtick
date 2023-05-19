import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { UsersService } from 'src/app/core/users.service';
import { invokeGetUserInformationRequest } from 'src/app/store/action';
import { AppStateInterface } from 'src/app/store/appStateInterface';
import { userSelector } from 'src/app/store/selector';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  users$ = this.appStore.pipe(select(userSelector));

  sort: string = 'sort';
  sortParam: string = '';
  filter: string = 'filter';
  filterParam: string = '';
  showSortBy: boolean = false;
  showFilterMenu: boolean = false;
  users: [] = [];

  searchField!: FormControl;
  pageIndex: number = 1;
  pageSize: number = 10;
  pagesOption = [10, 20, 30, 40, 50, 60];
  totalCount: any = 0;
  keyword: string = '';
  id: string = '';
  searchGroup = new FormGroup({
    searchField: new FormControl(''),
  });

  constructor(
    private router: Router,
    private appStore: Store<AppStateInterface>,
    private store: Store,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    let users = this.userService.getAllUsers();
    this.store.dispatch(invokeGetUserInformationRequest({ payload: users }));
    // this.users$.subscribe((res)=>{console.log(res)})
  }

  onSelectFilter(text: any, filterParam: string) {
    this.showFilterMenu = true;
    this.filter = text;
    this.filterParam = filterParam;
    this.searchGroup.get('searchField')?.patchValue('');
  }

  onSelect(text: any, sortParam: string) {
    this.showSortBy = true;
    this.sort = text;
    this.sortParam = sortParam;
  }
}
