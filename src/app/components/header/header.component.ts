import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public toTop(elementId: string): void { 
    console.log("TO TOP BITCH");
    this.viewportScroller.scrollToAnchor(elementId);
    console.log("AND AFTER THAT...");
  }
}