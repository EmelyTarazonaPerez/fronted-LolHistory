import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './webside/component/profile/profile.component';

const routes: Routes = [
{
  path:'',
  loadChildren: ()=> import('./webside/webside.module').then(m => m.WebsideModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
