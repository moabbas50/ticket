import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ENsharedComponent } from './En/enshared/enshared.component';
import { ArbicsharedComponent } from './arbicshared/arbicshared.component';

const routes: Routes = [
  {path:"",component:ArbicsharedComponent},
  {path:"Arabic",component:ArbicsharedComponent},
  {path:"English",component:ENsharedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
