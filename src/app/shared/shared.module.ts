import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { CodeDirective } from './code.directive';
import { AutogrowDirective } from './autogrow.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CodeDirective,
    AutogrowDirective
  ],
  declarations: [
    CodeDirective,
    AutogrowDirective
  ]
})
export class SharedModule { }
