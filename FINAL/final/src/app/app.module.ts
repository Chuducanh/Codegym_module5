import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusEditComponent } from './bus-edit/bus-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BusCreateComponent } from './bus-create/bus-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    BusEditComponent,
    BusCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
