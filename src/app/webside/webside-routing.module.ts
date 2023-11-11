import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent} from '../../app/webside/page/home/home.component'

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
