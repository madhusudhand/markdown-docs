import { Component, OnInit } from '@angular/core';

import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-markdown-board',
  templateUrl: './markdown-board.component.html',
  styleUrls: ['./markdown-board.component.scss']
})
export class MarkdownBoardComponent implements OnInit {
  markdown: any = {};
  projects: any = [];
  constructor(private mdService: MarkdownService) { }

  ngOnInit() {

    this.mdService.getProjects().subscribe(data => {
      this.projects = data;
      this.mdService.projectChange.next(this.projects[0]);
    });


    this.mdService.projectChange.subscribe(project => {
      this.mdService.getMarkDown(project.id).subscribe((data) => {
        this.markdown.data = data.markdown;
      });
    });
  }

}
