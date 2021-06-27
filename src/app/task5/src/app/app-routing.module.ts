import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import { DetailsdepartmentComponent } from './department/detailsdepartment/detailsdepartment.component';
import { ListComponent } from './department/list/list.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { HomeComponent } from './shared/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"departments",component:ListComponent},
  {path:"departments/add",component:AdddepartmentComponent},
  {path:"departments/details/:id",component:DetailsdepartmentComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
