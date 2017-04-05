import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CodeDirective } from './code.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    CodeDirective
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    CodeDirective
  ]
})
export class SharedModule { }
