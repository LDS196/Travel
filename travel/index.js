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

//slider desktop
   let cerclePic =document.querySelectorAll('.destination-mover-cercle-pic') ;
   function addActiveLeft () {
      cerclePic[0].classList.add('destination-mover-cercle-active');
      cerclePic[1].classList.remove('destination-mover-cercle-active');
      cerclePic[2].classList.remove('destination-mover-cercle-active');
   };
   function addActiveRight () {
      cerclePic[2].classList.add('destination-mover-cercle-active');
      cerclePic[0].classList.remove('destination-mover-cercle-active');
      cerclePic[1].classList.remove('destination-mover-cercle-active');
   };
   function removeActive () {
      cerclePic[1].classList.add('destination-mover-cercle-active');
      cerclePic[2].classList.remove('destination-mover-cercle-active');
      cerclePic[0].classList.remove('destination-mover-cercle-active');
   };

   let slides = document.querySelectorAll('.destination-pic');
   let slider = [];
   for( let i=0; i < slides.length; i++){
   slider[i] = slides[i].src
   };
   let step = 1;
   function changeLeft(){
      if (step === 1){
         addActiveLeft ()
         slides[0].src = slider[2];
         slides[1].src = slider[0];
         slides[2].src = slider[1];
         }else if (step === 2) {
            addActiveRight ()
            slides[0].src = slider[1];
            slides[1].src = slider[2];
            slides[2].src = slider[0];
         } else if (step === 3)  {
            removeActive ()
            slides[0].src = slider[0];
            slides[1].src = slider[1];
            slides[2].src = slider[2];
         }  step++
      if(step <= slides.length){
         
      } else step = +1;
   
};

function changeRight(){
   if (step === 1){
      addActiveRight()
      slides[0].src = slider[1];
      slides[1].src = slider[2];
      slides[2].src = slider[0];
      }else if (step === 2) {
         addActiveLeft ()
         slides[0].src = slider[2];
         slides[1].src = slider[0];
         slides[2].src = slider[1];
      } else if (step === 3)  {
         removeActive ()
         slides[0].src = slider[0];
         slides[1].src = slider[1];
         slides[2].src = slider[2];
      } step++;
   if(step <= slides.length){

   } else step = +1;

};

document.querySelector('.distination-card-slider-left').addEventListener('click', function () {
changeLeft();
});

document.querySelector('.distination-card-slider-right').addEventListener('click', function () {
   changeRight();
   });

   //End slider desctop