import { Directive, ElementRef } from '@angular/core';
import * as hljs from 'highlightjs/highlight.pack'

@Directive({
  selector: 'code'
})
export class CodeDirective {
  constructor(private el: ElementRef) {
    // hljs.highlightBlock(el.nativeElement);
    el.nativeElement.style.background = 'red';
  }
}
