import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, of, switchMap, take } from 'rxjs';
import { UsersService } from '../core/users.service';
import {
  invokeGetUserInformationRequest,
  invokeGetUserInformationRequestSuccess,
} from './action';

@Injectable()
export class userEffects {
  constructor(private action$: Actions, private userService: UsersService) {}

  getAllUsers$ = createEffect(() => {
    return this.action$.pipe(
      ofType(invokeGetUserInformationRequest),
      switchMap((action) => {
          return this.userService.getAllUsers().map((data) => {
              console.log(data)
              let array = []
              array.push(data)
              return invokeGetUserInformationRequestSuccess({
                payload: data
                });
            });
        })
        );
    });
}
