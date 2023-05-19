import { userStateInterface } from ".";
import {
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromUser from '../store/reducer'

import { userReducer } from "./reducer";
import { environment } from "src/environments/environment.prod";

export interface AppStateInterface {
    users: userStateInterface,
  }

  export const reducers: ActionReducerMap<AppStateInterface> = {
    users: fromUser.userReducer,

  };
  
  const reducerKeys = ['users'];
