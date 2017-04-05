import { Directive, ElementRef } from '@angular/core';
import * as autosize from 'autosize';

@Directive({
  selector: '[appAutogrow]'
})
export class AutogrowDirective {
  constructor(el: ElementRef) {
    autosize(el.nativeElement);
    el.nativeElement.height = '20px';
  }
}
