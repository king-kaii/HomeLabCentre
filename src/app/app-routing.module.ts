import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientModule } from './patient/patient.module';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren: ()=> import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path:'master',loadChildren: ()=> import('./master/master.module').then(mod=>mod.MasterModule)},
  {path:'patient',loadChildren: ()=> import('./patient/patient.module').then(mod=>PatientModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
