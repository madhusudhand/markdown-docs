import { Component, OnInit, Input } from '@angular/core';

import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() projects: any = [];

  @Input() markdown: any;

  saved: boolean = false;

  constructor(private mdService: MarkdownService) { }

  ngOnInit() {

  }

  saveMarkdown() {
    this.mdService.saveMarkdown(this.mdService.currentProject.id, this.markdown).subscribe(() => {
      this.saved = true;
      // setTimeout(() => this.saved = false, 2000);
    });
  }

  selectProject(project) {
    this.mdService.projectChange.next(project);
  }

}
