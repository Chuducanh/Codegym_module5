import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimeComponent } from './countdown-time/countdown-time.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
