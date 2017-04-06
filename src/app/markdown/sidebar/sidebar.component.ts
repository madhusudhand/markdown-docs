import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() markdown: any;

  constructor(private el: ElementRef, private mdService: MarkdownService) { }

  ngOnInit() {

  }

  onMenuSelection(item) {
    this.mdService.currentMarkdownItem = item;
  }

  onKeyDown(e, mainIndex, subIndex?) {
    switch(e.code) {
      case 'Enter':
        e.preventDefault();
        this.addMenuItem(mainIndex, subIndex);
        break;

      case 'Tab':
        e.preventDefault();
        this.toggleMenuSubMenu(mainIndex, subIndex, e.shiftKey);
        break;

      case 'ArrowUp':
        e.preventDefault();
        this.focusMenuItem(mainIndex, subIndex, 'prev');
        break;

      case 'ArrowDown':
        e.preventDefault();
        this.focusMenuItem(mainIndex, subIndex, 'next');
        break;
    }
  }

  addMenuItem(mainIndex, subIndex) {
    if (typeof subIndex === 'undefined') {
      this.markdown.data.splice(mainIndex + 1, 0, {
         title: '',
         content: '',
         submenu: []
      });

      setTimeout(() => {
        this.focusMenuItem(mainIndex + 1);
      }, 0);
    } else {
      this.markdown.data[mainIndex].submenu.splice(subIndex + 1, 0, {
         title: '',
         content: '',
         submenu: []
      });

      setTimeout(() => {
        this.focusMenuItem(mainIndex, subIndex + 1);
      }, 0);
    }
  }

  toggleMenuSubMenu(mainIndex, subIndex, makeItMainMenu) {
    // tab
    if (typeof subIndex === 'undefined' && !makeItMainMenu) {
      if (mainIndex > 0) { // root menu can't be made child
        const item = this.markdown.data.splice(mainIndex, 1);
        const prevItem = this.markdown.data[mainIndex - 1];
        prevItem.submenu = prevItem.submenu || [];
        prevItem.submenu.push(item[0]);

        const currIndex = prevItem.submenu.length - 1;

        for (let sm of item[0].submenu) {
          prevItem.submenu.push(sm);
        }
        item[0].submenu = [];

        setTimeout(() => {
          this.focusMenuItem(mainIndex - 1, currIndex);
        }, 0);

      }
    }
    // shift + tab
    else if (typeof subIndex !== 'undefined' && makeItMainMenu) {
      const items = this.markdown.data[mainIndex].submenu.splice(subIndex);
      const newIndex = mainIndex + 1;
      this.markdown.data.splice(newIndex, 0, items[0]);

      for (let i = 1; i<items.length; i++) {
        this.markdown.data[newIndex].submenu = this.markdown.data[newIndex].submenu || [];
        this.markdown.data[newIndex].submenu.push(items[i]);
      }

      setTimeout(() => {
        this.focusMenuItem(newIndex);
      }, 0);

    }
  }

  focusMenuItem(mainIndex, subIndex?, position?) {
    if (!position) { // next available index
      let item;
      item = this.el.nativeElement.querySelectorAll('.menu-row > li')[mainIndex];
      if (typeof subIndex !== 'undefined') {
        item = item.querySelectorAll('.submenu-row > li')[subIndex];
      }

      if (item) {
        item = item.querySelector('textarea');
        if (item) item.focus();
      }
    } else if (position === 'up') {

    } else if (position === 'down') {

    }
  }

}
