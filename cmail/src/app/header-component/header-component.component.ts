import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmail-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  private ismenuOpen = false;

  get getIsmenuOpen() {
    return this.ismenuOpen;
  }
  constructor() { }

  ngOnInit() {
  }
  
  toggleMenu() {
    this.ismenuOpen = !this.getIsmenuOpen;
  }

}
