
//AOS
AOS.init({
  });
  
$('.product-tab--container_content__box').slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    touchMove: true,
    swipe:true,

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

