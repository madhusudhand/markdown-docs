import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocNavComponent } from './doc-nav.component';

describe('DocNavComponent', () => {
  let component: DocNavComponent;
  let fixture: ComponentFixture<DocNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
