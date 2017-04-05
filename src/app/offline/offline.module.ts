import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfflinePreviewComponent } from './offline-preview/offline-preview.component';
import { DocNavComponent } from './doc-nav/doc-nav.component';
import { DocContentComponent } from './doc-content/doc-content.component';
import { DocHeaderComponent } from './doc-header/doc-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OfflinePreviewComponent,
    DocNavComponent,
    DocContentComponent,
    DocHeaderComponent
  ]
})
export class OfflineModule { }
