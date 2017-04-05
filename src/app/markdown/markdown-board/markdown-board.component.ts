import { Component, OnInit } from '@angular/core';

import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-markdown-board',
  templateUrl: './markdown-board.component.html',
  styleUrls: ['./markdown-board.component.scss']
})
export class MarkdownBoardComponent implements OnInit {
  markdown: any = {};
  constructor(private mdService: MarkdownService) { }

  ngOnInit() {
    this.mdService.getMarkDown().subscribe((data) => {
      this.markdown.data = data;
    });
  }

}
