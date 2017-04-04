import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror';

import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  constructor(private mdService: MarkdownService) { }

  @ViewChild('markdown') markdown: ElementRef;

  ngOnInit() {
    setTimeout(() => {
      this.mdService.markdownText.next(this.markdown.nativeElement.value);
    }, 0);

    // const editor = CodeMirror.fromTextArea(document.getElementById('ta'), {
    //   lineNumbers: true
    // });
  }

  onInputChange(e) {
    this.mdService.markdownText.next(e.target.value);
  }

}
