import { createReducer, on } from '@ngrx/store';
import { userStateInterface } from '.';
import { invokeGetUserInformationRequest, invokeGetUserInformationRequestSuccess } from './action';

const initialState: userStateInterface = {
   users : {data: []}
  };

  export const userReducer = createReducer(
    initialState,
    on(invokeGetUserInformationRequest, (state, { payload }) => {
      return {
        ...state,
        users: {data:payload}
      };
    }),
  )