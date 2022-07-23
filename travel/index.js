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

   let offset = 0;
   const sliderMobile = document.querySelector('.destinations_slider-mobile')
   let cercleLeft = document.querySelector('.distination_card-vector-pale')
   let cercleRigth = document.querySelector('.distination_card-vector-active')

   document.querySelector('.distination_card-vector-active').addEventListener('click',  function sliderPic (){
      cercleRigth.classList.add('vector-active-right');
      cercleLeft.classList.remove('vector-active-left');
      offset = offset + 360;
      if (offset === 360){
         cer1()
      }
      if (offset === 720){
         cer2()
         cercleRigth.classList.remove('vector-active-right');
         cercleLeft.classList.add('vector-active-left');
      }
      if (offset > 720){
         cer0()
         offset = 0;
      }
      sliderMobile.style.left = -offset +'px';
   });
   document.querySelector('.distination_card-vector-pale').addEventListener('click',  function sliderPic (){
      cercleLeft.classList.add('vector-active-left');
      cercleRigth.classList.remove('vector-active-right');
      offset = offset - 360;
      if (offset === 360){
         cer1()
         cercleRigth.classList.add('vector-active-right');
         cercleLeft.classList.add('vector-active-left');
      }
      if (offset === 0){
         cer0()
         cercleRigth.classList.add('vector-active-right');
         cercleLeft.classList.remove('vector-active-left');
      
      }
      if (offset < 0){
         cer2()
         offset = 720;
        
      }
      sliderMobile.style.left = -offset +'px';
      
   });
 
         function cer0(){
            cerclePic[0].classList.add('destination-mover-cercle-active-mobile');
            cerclePic[2].classList.remove('destination-mover-cercle-active-mobile');
         }

         function cer1(){
            cerclePic[1].classList.add('destination-mover-cercle-active-mobile');
            cerclePic[0].classList.remove('destination-mover-cercle-active-mobile');
         }
         
         function cer2(){
            cerclePic[2].classList.add('destination-mover-cercle-active-mobile');
            cerclePic[1].classList.remove('destination-mover-cercle-active-mobile');
         }
   

 

document.querySelector('.popap_sing_btn').addEventListener('click', () => {
   const valueEmail = document.getElementById('email').value;
   const valuePassword = document.getElementById('password').value;
   alert(`E-mail:${valueEmail}\nPassword:${valuePassword}`);

});

let popap = document.querySelector('.popap');
let popapContent = document.querySelector('.popap_content');
let hiddenPopap = document.querySelector('.popapclose');
let openSingPopap = document.querySelector('.popapsing-open');
let account = document.querySelector('.header_nav_items_mobile');

document.querySelector('.popap_register').addEventListener('click', () => {
   hiddenPopap.style.display = 'none';
   openSingPopap.style.display = 'flex';
});

document.querySelector('.header-buttom').addEventListener('click', () =>{
   popap.style.opacity = '100%';
   popap.style.visibility = 'visible';
   popapContent.style.transform = 'translate(0px,0px)'; 
   
});
document.querySelector('.header_nav_items_mobile').addEventListener('click', () =>{
   popap.style.opacity = '100%';
   popap.style.visibility = 'visible';
   popapContent.style.transform = 'translate(0px,0px)'; 
   
});

document.querySelector('.popap_area').addEventListener('click', () =>{
   popapContent.style.transform = 'translate(0px,-100%)';
   popap.style.opacity = '0';
   popap.style.visibility = 'hidden';
   hiddenPopap.style.display = 'flex';
   openSingPopap.style.display = 'none';

});