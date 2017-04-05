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

    const editor = CodeMirror.fromTextArea(this.markdown.nativeElement, {
      mode: 'gfm',
      theme: 'base16-light',
      lineNumbers: true
    });

    editor.on('change', (cm) => {
      this.mdService.markdownText.next(cm.getValue());
    })
  }
}
