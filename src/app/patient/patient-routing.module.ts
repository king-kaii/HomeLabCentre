import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';


const routes: Routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'form',component:PatientComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class PatientRoutingModule {}