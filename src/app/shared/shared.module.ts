import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { HeaderComponent } from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
  declarations: [HeaderComponent,SidebarComponent]
})
export class SharedModule { }
