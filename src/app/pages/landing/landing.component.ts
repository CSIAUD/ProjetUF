import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    firstSectionHeight();
  }
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}

function firstSectionHeight(){
  let header = document.querySelectorAll("header")[0].getBoundingClientRect();
  let topDiv = document.querySelector("main>section:first-of-type");
  if(topDiv != null)
  (topDiv as HTMLElement).style.height = "calc(100vh - "+header.height+"px)"
}