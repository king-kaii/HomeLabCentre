import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { SearchComponent } from './search/search.component';
import { AddeditstaffsComponent } from './addeditstaffs/addeditstaffs.component';
import { FindDocComponent } from './find-doc/find-doc.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

const routes: Routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'mas',component:MasterComponent},
    {path:'search',component:SearchComponent},
    {path:'addstaff',component:AddeditstaffsComponent},
    {path:'findDoc',component:FindDocComponent},
    {path:'doctor-list',component:DoctorListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class MasterRoutingModule {}