import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  onEdit: Boolean = false;
  done: Boolean = false;
  items:Array <any>;
  constructor() {
    this.items = [];
   }

  ngOnInit() {
  }

  validateName(element) {
    this.onEdit = true;
    this.done = false;
  }

  setName(element) {
    this.items.push(element.value);
    this.onEdit = false;
    element.value = null;
  }

}
