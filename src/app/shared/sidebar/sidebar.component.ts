import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  onEdit: Boolean = false;
  done: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  validateName(element) {
    this.onEdit = true;
  }

  setName(element) {
    this.done = true;
    this.onEdit = false;
    element.value = null;
  }

}
