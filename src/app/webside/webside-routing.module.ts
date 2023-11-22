import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { AccountComponent } from './page/account/account.component'
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,
  children: [
    {path:'', redirectTo: 'profile', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsideRoutingModule { }
