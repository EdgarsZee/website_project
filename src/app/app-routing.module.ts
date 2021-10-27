import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyexperienceComponent } from './myexperience/myexperience.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component'
import { ExperienceComponent } from './experience/experience.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'myexperience',component:MyexperienceComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent},
  {path:'experience', component:ExperienceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
