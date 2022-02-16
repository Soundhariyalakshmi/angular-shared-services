import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedService } from './shared-service.service';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ParentComponent, Child1Component, Child2Component],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
