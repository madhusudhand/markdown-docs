import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  onEdit: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  setName() {
    this.onEdit = false;
  }

}
