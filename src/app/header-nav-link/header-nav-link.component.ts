import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav-link',
  templateUrl: './header-nav-link.component.html',
  styleUrls: ['./header-nav-link.component.css']
})
export class HeaderNavLinkComponent implements OnInit {

  @Input() pageName = "" 

  constructor() { }

  ngOnInit(): void {
  }

}
