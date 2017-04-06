import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from '../../markdown/markdown.service';


@Component({
  selector: 'app-offline-preview',
  templateUrl: './offline-preview.component.html',
  styleUrls: ['./offline-preview.component.scss']
})
export class OfflinePreviewComponent implements OnInit {

  markup: any =  {
    data: []
  };
  constructor(private mdService: MarkdownService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.mdService.getMarkDown(params.id).subscribe((data) => {
        this.markup.data = data.markdown;
      });
    });
  }
}
