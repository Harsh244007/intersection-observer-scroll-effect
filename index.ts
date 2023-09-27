"use client";
import React, { useEffect } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function observerCallback(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("fadeOut", "fadeIn");
    } else {
      entry.target.classList.replace("fadeIn", "fadeOut");
    }
  });
}

const IntersectionObserverComponent = () => {
  
  useEffect(() => {
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const fadeElms = document.querySelectorAll(".fade");
  fadeElms.forEach((el) => observer.observe(el));
 
  return () => {fadeElms.forEach((el) => observer.unobserve(el))};
  }, ); // you can give contain ref to handling side effects
    
};

export default IntersectionObserverComponent;

<style>
  {`.fade {
  will-change: opacity, scale;
  transition: opacity 0.7s ease-in linear forwards, scale 0.5s ease-in forwards,
    transform 0.7s ease-in forwards;
}

.fadeOut {
  opacity: 0.2;
  scale: 0.75;
}

.fadeIn {
  opacity: 1;
  scale: 1;
  animation: scroll-up 1s forwards linear ease-in;
  -webkit-animation: scroll-up 1s forwards linear ease-in;
  animation-iteration-count: 1 !important;
  -webkit-animation-iteration-count: 1 !important;
}`}
</style>


//use useffect in next js page direory
