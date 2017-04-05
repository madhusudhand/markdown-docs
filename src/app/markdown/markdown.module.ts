import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MarkupPreviewComponent } from './markup-preview/markup-preview.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { MarkdownBoardComponent } from './markdown-board/markdown-board.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MarkdownService } from './markdown.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MarkdownBoardComponent
  ],
  declarations: [
    MarkupPreviewComponent,
    MarkdownEditorComponent,
    MarkdownBoardComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [MarkdownService]
})
export class MarkdownModule { }
