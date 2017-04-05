import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CodeDirective } from './code.directive';
import { AutogrowDirective } from './autogrow.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
