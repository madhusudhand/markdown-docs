import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarkdownModule } from './markdown/markdown.module';
import { SharedModule } from './shared/shared.module';
import { OfflineModule } from './offline/offline.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    MarkdownModule,
    OfflineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
