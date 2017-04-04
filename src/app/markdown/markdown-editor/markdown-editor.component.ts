import { Component, OnInit, ElementRef } from '@angular/core';

import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  constructor(private mdService: MarkdownService) { }

  ngOnInit() {
  }

  onInputChange(e) {
    this.mdService.markdownText.next(e.target.value);
  }

}
