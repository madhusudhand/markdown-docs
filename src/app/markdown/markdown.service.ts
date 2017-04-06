import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class MarkdownService {
  public markdownText: Subject<string>;
  public markdowns: Array<any>;

  public currentMarkdownItem: any = {};
  public currentMarkUpItem: any = {}; //used for offline preview

  constructor(private http: Http) {
    this.markdownText = new Subject();

    this.markdownText.subscribe((data) => {
      this.currentMarkdownItem.content = data;
    });
  }

  getMarkDown() {
    return this.http.get(environment.api+'/markdown/project/1')
    .map((r: Response) => r.json());
  }
}
