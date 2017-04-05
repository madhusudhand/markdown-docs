import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-doc-content',
  templateUrl: './doc-content.component.html',
  styleUrls: ['./doc-content.component.scss']
})
export class DocContentComponent implements OnInit {

  @ViewChild('preview') preview: ElementRef;
  @Input() markup: string = '';

  constructor() { }

  ngOnInit() {
    this.markup = this.markup || '';
  }

}
