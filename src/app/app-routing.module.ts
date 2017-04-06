import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownBoardComponent } from './markdown/markdown-board/markdown-board.component';
import { LandingComponent } from './home/landing/landing.component';
import { HomeModule } from './home/home.module';
import { MarkdownModule } from './markdown/markdown.module';
import { OfflineModule } from './offline/offline.module';
import { OfflinePreviewComponent } from './offline/offline-preview/offline-preview.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'project', component: MarkdownBoardComponent },
  { path: 'docs/project/:id', component: OfflinePreviewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    MarkdownModule,
    OfflineModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
