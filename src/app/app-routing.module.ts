import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import { TourPageComponent } from './tour-page/tour-page.component';


const routes: Routes = [
{
	path:"",component: HomePageComponent
},
{
	path:"about",component: AboutPageComponent
},
{
	path:"tour",component: TourPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
