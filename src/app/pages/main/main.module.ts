import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/app/store/reducer';
import { userEffects } from 'src/app/store/effects';
import { ViewSingleUserComponent } from './view-single-user/view-single-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AllUsersComponent,
    ViewSingleUserComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([userEffects]),
  ]
})
export class MainModule { }
