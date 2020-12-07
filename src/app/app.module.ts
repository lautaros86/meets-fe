import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ShellComponent} from "./shell/shell/shell.component";
import {ShellModule} from "./shell/shell.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
