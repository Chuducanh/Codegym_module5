import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusListComponent} from "./bus-list/bus-list.component";
import {BusEditComponent} from "./bus-edit/bus-edit.component";
import {BusCreateComponent} from "./bus-create/bus-create.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bus/list',
    pathMatch: 'full',
  },
  {
    path: 'bus',
    children: [
      {path: 'list', component: BusListComponent},
      {path: 'edit/:id', component: BusEditComponent},
    ]
  },
  {
    path: 'bus',
    children: [
      {path: 'list', component: BusListComponent},
      {path: 'create', component: BusCreateComponent},
    ]
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
