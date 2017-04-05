import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePreviewComponent } from './offline-preview.component';

describe('OfflinePreviewComponent', () => {
  let component: OfflinePreviewComponent;
  let fixture: ComponentFixture<OfflinePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflinePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
