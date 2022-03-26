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
    init();
  }
  closePopup(){
    let popup = document.getElementById("popup");
    popup?.classList.add("hidden");
  }

}

function init(){
  let popup = document.getElementById("popup");
  let instals = document.querySelectorAll("#installs>div");
  instals.forEach(install => {
    install.addEventListener('click', (e) => displayImg(e))
  });

  window.addEventListener('resize', sizeDivs);
}


function sizeDivs(){
  let instals = document.querySelectorAll("#installs>div");
  instals.forEach(install => {
    let full = install.getBoundingClientRect();
    let img = install.children[0].getBoundingClientRect();
    (install.children[1] as HTMLElement).style.height = (full.height-img.height) + "px"
  });
}

function displayImg(e: any){
  let popup = document.getElementById("popup");
  let popupIMG = document.getElementById("popup-img");
  let popupTXT = document.getElementById("popup-txt");
  let popupTITLE = document.getElementById("popup-title");
  let target = e.target;

  while(target.parentElement.id != "installs"){
    target = target.parentElement;
  }
  popup?.classList.remove("hidden");
  let img = target.querySelector("img").attributes.src.value;
  let title = target.querySelector("h3").innerText;
  let text = target.querySelector("p").innerText;

  (popupIMG as HTMLImageElement).src = img;
  (popupTXT as HTMLElement).innerText = text;
  (popupTITLE as HTMLElement).innerText = title;

}