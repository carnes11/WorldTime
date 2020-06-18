import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WorldTimeApiService } from './services/world-time-api.service';

import { DisplayComponent } from './display/display.component';
import { TimeZoneComponent } from './time-zone/time-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TimeZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [WorldTimeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
