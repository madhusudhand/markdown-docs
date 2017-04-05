import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror';

import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  editor: any;
  @Input() item: any = {};
  @ViewChild('markdownArea') markdownArea: ElementRef;

  constructor(private mdService: MarkdownService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.mdService.markdownText.next(this.item.content || '');
    }, 0);

    this.editor = CodeMirror.fromTextArea(this.markdownArea.nativeElement, {
      mode: 'gfm',
      theme: 'base16-light',
      lineNumbers: true
    });

    this.editor.on('change', (cm) => {
      this.mdService.markdownText.next(cm.getValue());
    })
  }

  ngOnChanges() {
    if (this.editor) {
      this.editor.setValue(this.item.content || '');
    }
  }
}
