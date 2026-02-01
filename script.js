document.addEventListener("DOMContentLoaded", () => {

  // Header sombra scroll
  const header = document.querySelector(".header");
  const toggleHeaderShadow = () => {
    if(!header) return;
    if(window.scrollY>10) header.classList.add("header--scrolled");
    else header.classList.remove("header--scrolled");
  };
  toggleHeaderShadow();
  window.addEventListener("scroll", toggleHeaderShadow);

  // Smooth scroll #anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{
      const target=document.querySelector(a.getAttribute("href"));
      if(!target)return;
      e.preventDefault();
      target