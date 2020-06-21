
//AOS
AOS.init({
  
  });
  


$(document).ready(function(){
  
  $('.product-tab--container_content__box').slick({
      dots: false,
      accessibility:true,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed: 100,
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
$('.product-tab--container_content__category').slick({
      dots: false,
      accessibility:true,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed: 100,
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
  autoplaySpeed: 100,
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
  autoplaySpeed: 200,
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

  
  });
sly.init();

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


