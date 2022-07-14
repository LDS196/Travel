//Burger 
(function () {
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header-nav');
   const menuCloseItem = document.querySelector('.main');   
   burgerItem.addEventListener('click', () => {
   menu.classList.add('header-nav-active');
   })
  menu.addEventListener('click', ()=> {
      menu.classList.remove('header-nav-active');
   })
   menuCloseItem.addEventListener('click', ()=> {
      menu.classList.remove('header-nav-active');
   })
}());

console.log("1.48\n2.15\n3.22\nTotal:85");

//slider
let offset = 0;
const sliderLine = document.querySelectorAll('.destination-pic');
console.log(sliderLine);
document.querySelector('.distination-card').addEventListener('click', function () {
   offset = offset + 860;
   if (offset > 2720){
      offset = 0;
   }
   sliderLine[0].style.left = offset + 'px';
   sliderLine[1].style.left = offset + 'px';
   sliderLine[2].style.left = -offset * 2 + 'px';

});