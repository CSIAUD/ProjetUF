import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // firstSectionHeight();
    resizeImages();
  }
}

  window.addEventListener("resize", resizeImages);

function firstSectionHeight(){
  let header = document.querySelectorAll("header")[0].getBoundingClientRect();
  let topDiv = document.querySelector("main>section:first-of-type");
  if(topDiv != null)
  (topDiv as HTMLElement).style.height = "calc(100vh - "+header.height+"px)"
}

function resizeImages() {
  let imgs = document.querySelectorAll("#team>div:not(:first-child)>img");
  imgs.forEach(img => {
    (img as HTMLElement).style.height = (img.getBoundingClientRect().width).toString() + "px";
  });
}