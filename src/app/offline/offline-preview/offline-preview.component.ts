import { Component, OnInit } from '@angular/core';
import { MarkdownService } from '../../markdown/markdown.service';


@Component({
  selector: 'app-offline-preview',
  templateUrl: './offline-preview.component.html',
  styleUrls: ['./offline-preview.component.scss']
})
export class OfflinePreviewComponent implements OnInit {

  markup: any =  {};
  constructor(private mdService: MarkdownService) { }

  ngOnInit() {
    this.mdService.getMarkDown().subscribe((data) => {
      this.markup.data = data;
    });
  }
}
