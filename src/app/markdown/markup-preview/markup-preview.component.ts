import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as MarkdownIt from 'markdown-it';
import * as hljs from 'highlightjs/highlight.pack'

import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-markup-preview',
  templateUrl: './markup-preview.component.html',
  styleUrls: ['./markup-preview.component.scss']
})
export class MarkupPreviewComponent implements OnInit {
  previewMarkup: any;
  @ViewChild('preview') preview: ElementRef;

  constructor(private mdService: MarkdownService) { }

  ngOnInit() {
    const md = new MarkdownIt();

    this.mdService.markdownText.subscribe((text) => {
      this.previewMarkup = md.render(text);
      this.hilightCodeBlocks();
    });
  }

  ngAfterViewInit() {
    this.hilightCodeBlocks();
  }

  private hilightCodeBlocks() {
    setTimeout(() => {
      const blocks: any = this.preview.nativeElement.querySelectorAll('pre code');
      for (let block of blocks) {
        hljs.highlightBlock(block);
      }
    }, 0);
  }

}
