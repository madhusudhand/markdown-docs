import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkupPreviewComponent } from './markup-preview/markup-preview.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { MarkdownBoardComponent } from './markdown-board/markdown-board.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MarkdownBoardComponent
  ],
  declarations: [
    MarkupPreviewComponent,
    MarkdownEditorComponent,
    MarkdownBoardComponent
  ]
})
export class MarkdownModule { }
