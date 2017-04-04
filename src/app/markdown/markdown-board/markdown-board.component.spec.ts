import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownBoardComponent } from './markdown-board.component';

describe('MarkdownBoardComponent', () => {
  let component: MarkdownBoardComponent;
  let fixture: ComponentFixture<MarkdownBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
