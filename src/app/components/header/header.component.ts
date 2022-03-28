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
    initBurger();
    // initMenu();
  }
}

function initMenu(){
  const nav = document.querySelector("#header > div:first-child")?.getBoundingClientRect(); // Génère un bug qui fait qu'on arrive sur le bas de la page
  let header = document.querySelector("#header");

  if(header && nav){
    console.log("OK Technique");
    (header as HTMLElement).style.height = nav.bottom+"px";
  }else{
    console.log("K-O Technique");
  }
}

function initBurger(){
  let burgerBase = document.getElementById("burger");
  let menuLinks = document.querySelectorAll("#menu a");
  let burger;

  burgerBase?.addEventListener('click', function (e) {
    if((e.target as SVGElement).ownerSVGElement){
      burger = ((e.target as SVGElement).ownerSVGElement as SVGElement);
    }else{
      burger = (e.target as SVGElement);
    }
    toggleMenu(burger)
  }, false);

  menuLinks.forEach(link => {
      link.addEventListener('click', ev=>{
          let burger = ((document.getElementById("burger") as unknown) as SVGElement)
          toggleMenu(burger)
      })
  });
};

function toggleMenu(burger: SVGElement) {
  let status = burger.dataset['status']
  let header = document.querySelector("#header");
  const nav = document.querySelector("#header > div:first-child")?.getBoundingClientRect();
  if(status == "close"){
      burger.dataset['status'] = "open";
      
      ((document.getElementById("stage1") as unknown) as SVGAnimateTransformElement).beginElement();
      // document.getElementById("menu")?.classList.replace("hidden",'flex');
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
      (header as HTMLElement).style.height = "100vh";
  }else{
      burger.dataset['status'] = "close";
      ((document.getElementById("stage2") as unknown) as SVGAnimateTransformElement).beginElement();
      // document.getElementById("menu")?.classList.replace('flex',"hidden");
      document.getElementsByTagName("html")[0].style.overflow = "unset";
      (header as HTMLElement).style.height = nav?.bottom + "px";
  }
};