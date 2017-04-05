import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownBoardComponent } from './markdown/markdown-board/markdown-board.component';
import { LandingComponent } from './home/landing/landing.component';
import { HomeModule } from './home/home.module';
import { MarkdownModule } from './markdown/markdown.module';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'project', component: MarkdownBoardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    MarkdownModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
