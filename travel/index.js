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