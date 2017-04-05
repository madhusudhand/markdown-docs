import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownBoardComponent } from './markdown/markdown-board/markdown-board.component';

const routes: Routes = [
  { path: '', component: MarkdownBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
