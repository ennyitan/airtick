import { createAction, props } from '@ngrx/store';
import { users } from '.';
const data = []
export const invokeGetUserInformationRequest = createAction(
    '[User Information] invoke user information request fetch request',
    props<{
    payload : any
    }>()
  );
  export const invokeGetUserInformationRequestSuccess = createAction(
    '[User Information] invoke user information request fetch request success',
    props<{payload:any}>()

  )

  export const newUser = createAction(
    '[new User] new user login',
    props<{payload: any}>()
  )
  export const newUserSuccess = createAction(
    '[new User] new user login success',
    props<{payload: any}>()
  )

  export const registration = createAction(
    '[new User] new user registration',
    props<{payload: any}>()
  )
  export const registrationSuccess = createAction(
    '[new User] new user registration success',
    props<{payload: any}>()
  )