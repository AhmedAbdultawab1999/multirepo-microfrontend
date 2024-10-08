import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedLibComponent } from "../../../shell/projects/shared-lib/src/lib/shared-lib.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedLibComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
