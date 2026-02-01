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
      const track = document.querySelector('.carousel-track');
let index = 0;

function moveCarousel() {
  const members = document.querySelectorAll('.team-member');
  index++;
  if (index >= members.length) index = 0;
  const offset = -index * (members[0].offsetWidth + 20); // 20 = gap
  track.style.transform = `translateX(${offset}px)`;
}

setInterval(moveCarousel, 3000); // muda a cada 3 segundos