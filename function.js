"use strict";
const Showing_Class = "showing";
const FirstSlide = document.querySelector(".slider_item:first-child");
//side
function slide() {
  const Currentslide = document.querySelector(`.${Showing_Class}`);
  if (Currentslide) {
    Currentslide.classList.remove(Showing_Class);
    const Nextslide = Currentslide.nextElementSibling;
    if (Nextslide) {
      Nextslide.classList.add(Showing_Class);
    } else {
      FirstSlide.classList.add(Showing_Class);
    }
  } else {
    FirstSlide.classList.add(Showing_Class);
  }
}

slide();
setInterval(slide, 3000);

//slide button
function Btnclick_1() {
  const Currentslide = document.querySelector(`.${Showing_Class}`);
  if (Currentslide) {
    Currentslide.classList.remove(Showing_Class);
    const Nextslide = Currentslide.nextElementSibling;
    if (Nextslide) {
      Nextslide.classList.add(Showing_Class);
    } else {
      FirstSlide.classList.add(Showing_Class);
    }
  } else {
    FirstSlide.classList.add(Showing_Class);
  }
}

function Btnclick_2() {
  const Currentslide = document.querySelector(`.${Showing_Class}`);
  const Lastslide = document.querySelector(".slider_item:last-child");
  if (Currentslide) {
    Currentslide.classList.remove(Showing_Class);
    const Prevslide = Currentslide.previousElementSibling;
    if (Prevslide) {
      Prevslide.classList.add(Showing_Class);
    } else {
      Lastslide.classList.add(Showing_Class);
    }
  } else {
    Lastslide.classList.add(Showing_Class);
  }
}
