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
  if(status == "close"){
      burger.dataset['status'] = "open";
      
      ((document.getElementById("stage1") as unknown) as SVGAnimateTransformElement).beginElement()
      document.getElementById("menu")?.classList.replace("hidden",'flex')
      document.getElementsByTagName("html")[0].style.overflow = "hidden"
  }else{
      burger.dataset['status'] = "close";
      ((document.getElementById("stage2") as unknown) as SVGAnimateTransformElement).beginElement()
      document.getElementById("menu")?.classList.replace('flex',"hidden")
      document.getElementsByTagName("html")[0].style.overflow = "unset"
  }
};