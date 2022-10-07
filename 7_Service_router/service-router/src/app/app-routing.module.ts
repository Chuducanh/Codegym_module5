import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {SongComponent} from "./song/song.component";
import {SongPlayerComponent} from "./song-player/song-player.component";
import {ProductManagementComponent} from "./product/product-management/product-management.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'song',
    component: SongComponent,
    children: [{
      path: ':id',
      component: SongPlayerComponent
    }]
  },
  {
    path: 'product/list',
    component: ProductManagementComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
