import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as MarkdownIt from 'markdown-it';

@Component({
  selector: 'app-doc-content',
  templateUrl: './doc-content.component.html',
  styleUrls: ['./doc-content.component.scss']
})
export class DocContentComponent implements OnInit {
  markup: any;
  @Input() item: any = {};

  private md = new MarkdownIt();

  constructor() { }

  ngOnInit() {
    this.markup = this.md.render(this.item.content || '');
  }

  ngOnChanges() {
    this.markup = this.md.render(this.item.content || '');
  }
}
