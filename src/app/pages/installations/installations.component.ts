import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.css']
})
export class InstallationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sizeDivs();
  }

}

window.addEventListener('resize', sizeDivs)

function sizeDivs(){
  let instals = document.querySelectorAll("#installs>div");
  instals.forEach(install => {
    let full = install.getBoundingClientRect();
    let img = install.children[0].getBoundingClientRect();
    (install.children[1] as HTMLElement).style.height = (full.height-img.height) + "px"
  });
}