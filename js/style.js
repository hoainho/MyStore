
//AOS
AOS.init({
  
  });
//LoadPage follow to CrollY
window.onload = function(){
  //Menu
  const ShowNavbar =document.querySelector(".navbar-content--menu");
  window.addEventListener('scroll',menuFixed);
  //Logo box
  const LGnavbar =document.querySelector(".navbar-content--header_main__features___logo ");
  const LGsize = document.querySelector(".navbar-content--header_main__features___logo-box--logo");
  window.addEventListener('scroll',logosize);
  window.addEventListener('scroll',logofixed);
  //Cart
  const CartN = document.querySelectory(".navbar-content--header_main__features___control-cart--name");
  const CartI = document.querySelectory(".navbar-content--header_main__features___control-cart--icon");
  const CartBox =document.querySelector(".navbar-content--header_main__features___control-cart");
  window.addEventListener('scroll',Cart);
  window.addEventListener('scroll',CartName);
  window.addEventListener('scroll',CartIcon);


  
  function menuFixed(){
        if(window.scrollY >=200) {
            ShowNavbar.style.position= 'fixed';
            ShowNavbar.style.top = '0';
            ShowNavbar.style.width = '100%';
            ShowNavbar.style.zIndex ='11';
          }
          else
          {
            ShowNavbar.style.position = 'relative';
            ShowNavbar.style.backgroundColor ='#232f3e';
            

          }
    };
  function logofixed(){
              if(window.scrollY >=200 ){
                LGnavbar.style.position ='fixed';
                LGnavbar.style.height ='18%';
                LGnavbar.style.width ='13%';
                LGnavbar.style.top = '-1.5rem';
                LGnavbar.style.zIndex = '12';
              }
              else{
                LGnavbar.style.position ='relative';
                LGnavbar.style.bottom ='8%';
                LGnavbar.style.width ='100%';
                LGnavbar.style.height ='100%';

              }
      }
  function logosize(){
      if(window.scrollY >=200 ){
        LGsize.style.fontSize = '4rem';
      }
      else{
        LGsize.style.fontSize ='5rem';
      }
    }
    function Cart(){
      if(window.scrollY >=200 ){
        CartBox.style.position ='fixed';
        CartBox.style.right ='-4rem';
        CartBox.style.top ='-2rem';
        CartBox.style.width = '20%';
        CartBox.style.height ='20%';
        CartBox.style.zIndex ='12';
      }
      else{
        CartBox.style.position ='relative';
        CartBox.style.left ='3rem';
        CartBox.style.top ='-2rem';
        CartBox.style.height ='100%';
        
        
      }
    }
    function CartName(){
      if(window.scrollY >=200 ){
        CartN.style.width = '31%';
        CartN.style.height ='34%';
      }
      else{
        CartN.style.width = '50%';
        CartN.style.height ='100%';
      }
    }
    function CartIcon(){
      if(window.scrollY >=200 ){
        CartI.style.margin = '0';
      }
      else{
        CartI.style.margin = '0 1rem';
      }
    }
}  


$(document).ready(function(){
 
  $('.product-tab--container_content__box').slick({
      dots: false,
      accessibility:true,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed: 2000,
      centerMode:true,  
      initialSlide: 1 ,
      lazyLoad:'ondemand',
      pauseOnHover:true,
      swipe:true,
      touchMove:true,
      useCSS:true,
      useCSS3:true, 
      useTransform:true,
});
$('.product-tab--container_content__category').slick({
      dots: false,
      accessibility:true,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed: 3000,
      centerMode:true,  
      initialSlide: 3,
      lazyLoad:'ondemand',
      pauseOnHover:true,
      swipe:true,
      touchMove:true,
      useCSS:true,
      useCSS3:true, 
      useTransform:true,

});
$('.product-tab--container_content__category-SC').slick({
  dots: false,
  accessibility:true,
  slidesToShow: 5,
  slidesToScroll: 33,
  autoplay:true,
  autoplaySpeed: 1500,
  centerMode:true,  
  initialSlide: 2,
  lazyLoad:'ondemand',
  pauseOnHover:true,
  swipe:true,
  touchMove:true,
  useCSS:true,
  useCSS3:true, 
  useTransform:true,

});
$('.product-tab--container_content__category-KB').slick({
  dots: false,
  accessibility:true,
  slidesToShow: 5,
  slidesToScroll: 33,
  autoplay:true,
  autoplaySpeed: 2000,
  centerMode:true,  
  initialSlide: 1,
  lazyLoad:'ondemand',
  pauseOnHover:true,
  swipe:true,
  touchMove:true,
  useCSS:true,
  useCSS3:true, 
  useTransform:true,

});
$('.trademark-container--slider').slick({
  dots: false,
  accessibility:true,
  slidesToShow: 15,
  slidesToScroll: 3,
  autoplay:true,
  autoplaySpeed: 1000,
  centerMode:true,  
  initialSlide: 5,
  lazyLoad:'ondemand',
  pauseOnHover:true,
  swipe:true,
  touchMove:true,
  useCSS:true,
  useCSS3:true, 
  useTransform:true,
  prevArrow:false,
  nextArrow:false,

});

  });

$(document).ready(function(){
$('.product-tab--container_tittle__item').click(
  function(){ 
    $('.product-tab--container_tittle__item').removeClass('active-tab--item'),
    $(this).addClass('active-tab--item')
  });

});
$(document).ready(function(){
  $('.product-tab--container_tittle__link').click(
    function(){ 
      $('.product-tab--container_tittle__link').removeClass('active-tab--link'),
      $(this).addClass('active-tab--link')
    });
  });


