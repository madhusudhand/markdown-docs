import { Component, OnInit } from '@angular/core';
import * as MarkdownIt from 'markdown-it';

import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-markup-preview',
  templateUrl: './markup-preview.component.html',
  styleUrls: ['./markup-preview.component.scss']
})
export class MarkupPreviewComponent implements OnInit {
  previewMarkup: any;
  constructor(private mdService: MarkdownService) { }

  ngOnInit() {
    const md = new MarkdownIt();

    this.mdService.markdownText.subscribe((text) => {
      this.previewMarkup = md.render(text);
    });
  }
}
