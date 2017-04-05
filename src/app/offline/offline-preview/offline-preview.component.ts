import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-preview',
  templateUrl: './offline-preview.component.html',
  styleUrls: ['./offline-preview.component.scss']
})
export class OfflinePreviewComponent implements OnInit {

  markup: any = '';
  constructor() { }

  ngOnInit() {
    this.markup = '<h1>Hello</h1><p>world</p><h1>Hello</h1><p>world</p><h1>Hello</h1><p>world</p><h1>Hello</h1><p>world</p><h1>Hello</h1><p>world</p><h1>Hello</h1><p>world</p><h1>Hello</h1><p>world</p><h1>Hello</h1><p>world</p><h1>Hello</h1><p>world</p>';
  }

}
