import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {ShellComponent} from './shell/shell.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ShellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShellComponent
  ]
})
export class ShellModule {
}
