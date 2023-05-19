import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ViewSingleUserComponent } from './view-single-user/view-single-user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: MainComponent , children: [
    { path: '', component: DashboardComponent },
    {path: 'all-users', component: AllUsersComponent},
    {path: 'view-single-user/:id', component: ViewSingleUserComponent},
    {path: 'profile', component: ProfileComponent }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
