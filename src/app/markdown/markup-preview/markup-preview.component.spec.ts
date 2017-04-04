import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupPreviewComponent } from './markup-preview.component';

describe('MarkupPreviewComponent', () => {
  let component: MarkupPreviewComponent;
  let fixture: ComponentFixture<MarkupPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkupPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
