import { Component, ElementRef, OnInit } from '@angular/core';
import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private el: ElementRef, private mdService: MarkdownService) { }

  ngOnInit() {
    this.mdService.getMarkUp().subscribe((data) => {
      this.menuItems = data;
    });
  }

  onKeyDown(e, mainIndex, subIndex?) {
    // console.log(e);
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
      this.menuItems.splice(mainIndex + 1, 0, {
         title: '',
         content: '',
         submenu: []
      });

      setTimeout(() => {
        this.focusMenuItem(mainIndex + 1);
      }, 0);
    } else {
      this.menuItems[mainIndex].submenu.splice(subIndex + 1, 0, {
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
    if (typeof subIndex === 'undefined' && !makeItMainMenu) {
      if (mainIndex > 0) { // root menu can't be made child
        const item = this.menuItems.splice(mainIndex, 1);
        const prevItem = this.menuItems[mainIndex - 1];
        prevItem.submenu = prevItem.submenu || [];
        prevItem.submenu.push(item[0]);

        for (let sm of item[0].submenu) {
          prevItem.submenu.push(sm);
        }
        item[0].submenu = [];
      }
    } else if (typeof subIndex !== 'undefined' && makeItMainMenu) {
      const items = this.menuItems[mainIndex].submenu.splice(subIndex);
      const newIndex = mainIndex + 1;
      this.menuItems.splice(newIndex, 0, items[0]);

      for (let i = 1; i<items.length; i++) {
        this.menuItems[newIndex].submenu = this.menuItems[newIndex].submenu || [];
        this.menuItems[newIndex].submenu.push(items[i]);
      }

    }
  }

  focusMenuItem(mainIndex, subIndex?, position?) {
    if (!position) { // next available index
      let item;
      item = this.el.nativeElement.querySelectorAll('.menu-row > li')[mainIndex];
      if (typeof subIndex !== 'undefined') {
        item = item.querySelectorAll('.submenu-row > li')[subIndex];
        console.log(item);
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
