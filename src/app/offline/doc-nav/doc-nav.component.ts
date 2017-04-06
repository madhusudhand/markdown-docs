import { Component, OnInit, Input } from '@angular/core';
import {MarkdownService} from '../../markdown/markdown.service';

@Component({
  selector: 'app-doc-nav',
  templateUrl: './doc-nav.component.html',
  styleUrls: ['./doc-nav.component.scss']
})
export class DocNavComponent implements OnInit {
  @Input() markup: any;
  constructor(private mdService: MarkdownService) { }

  ngOnInit() {
  }

  onMenuSelection(item) {
    this.mdService.currentMarkUpItem = item;
  }
}
