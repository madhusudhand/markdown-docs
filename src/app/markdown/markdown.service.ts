import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MarkdownService {
  public markdownText: Subject<string>;
  constructor() {
    this.markdownText = new Subject();
  }
}
