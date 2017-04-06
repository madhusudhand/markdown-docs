import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class MarkdownService {
  public markdownText: Subject<string>;
  public markdowns: Array<any>;

  public currentProject: any = {};

  public projectChange: Subject<any>;

  public currentMarkdownItem: any = {};

  constructor(private http: Http) {
    this.markdownText = new Subject();
    this.projectChange = new Subject();

    this.markdownText.subscribe((data) => {
      this.currentMarkdownItem.content = data;
    });

    this.projectChange.subscribe(project => {
      this.currentProject = project;
    });
  }

  getMarkDown(projectId) {
    return this.http.get('/api/markdown/project/'+projectId)
    .map((r: Response) => r.json());
  }

  saveMarkdown(projectId, markdownObj) {
    return this.http.post('/api/markdown/project/'+projectId, {markdown: markdownObj});
  }

  getProjects() {
    return this.http.get('/api/projects')
    .map((r: Response) => r.json());
  }
}
