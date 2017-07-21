import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {environment} from '../../environments/environment';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class MarkdownService {
  public markdownText: Subject<string>;
  public markdowns: Array<any>;

  public currentProject: any = {};

  public projectChange: Subject<any>;

  public currentMarkdownItem: any = {};
  public currentMarkUpItem: any = {}; //used for offline preview

  private headers: any;


  private urlPrefix = 'http://localhost:3000'; // 'https://mdd-api.herokuapp.com';

  constructor(private http: Http) {
    this.markdownText = new Subject();
    this.projectChange = new Subject();

    this.markdownText.subscribe((data) => {
      this.currentMarkdownItem.content = data;
    });

    this.projectChange.subscribe(project => {
      this.currentProject = project;
    });

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }

  getMarkDown(projectId) {
    return this.http.get(this.urlPrefix+'/api/markdown/project/'+projectId)
    .map((r: Response) => r.json());
  }

  saveMarkdown(projectId, markdownObj) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.urlPrefix+'/api/markdown/project/'+projectId, {markdown: markdownObj}, options);
  }

  getProjects() {
    return this.http.get(this.urlPrefix+'/api/projects')
    .map((r: Response) => r.json());
  }
}
