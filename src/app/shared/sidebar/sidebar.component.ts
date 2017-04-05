import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.menuItems = [
      { title: 'Introduction' },
      { title: 'Setup' },
      { title: 'Installation' }
    ];
  }

  onKeyDown(e, index) {
    if (e.code === 'Enter') {
      e.preventDefault();
      this.addMenuItem(index + 1);
      setTimeout(() => {
        this.focusMenuItem(index + 1);
      }, 0);
    }
  }

  addMenuItem(index) {
    this.menuItems.splice(index, 0, {
       title: ''
    });
  }

  focusMenuItem(index) {
    const rows = this.el.nativeElement.querySelectorAll('.menu-row textarea');
    rows[index].focus();
  }

}
