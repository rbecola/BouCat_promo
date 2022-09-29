// градиент на главном экране
$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #FF2D2D, #FFFFFF)');
});

// draggable
$(function(){
  $("#draggable1, #draggable2, #draggable3").draggable();
});

// курсор
document.addEventListener('mousemove', e => {
  circle.style.left = e.pageX -125 + "px";
  circle.style.top = e.pageY -125 + "px";
  circle.style.opacity = "100%";
});

// курсор — постеры
$(".news-poster-block").hover(function(){
  $(".circle_blur").addClass("circle_blur-big");
},function(){
  $(".circle_blur").removeClass("circle_blur-big");
});

// курсор — кнопка
$(".button").hover(function(){
  $(".cursor").addClass("cursor-hover");
  $(".cursor-circle").addClass("cursor-circle-hover");
  $(".circle_blur").addClass("circle_blur-small");
},function(){
  $(".cursor").removeClass("cursor-hover");
  $(".cursor-circle").removeClass("cursor-circle-hover");
  $(".circle_blur").removeClass("circle_blur-small");
});

// стрелки
$(".arrow-slider2").click(function(){
  $(".circle1").toggleClass("opacity-10");
  $(".circle2").toggleClass("full-opacity");
  $(".arrow-slider1").toggleClass("no-active");
  $(this).toggleClass("no-active");
  $(".building-s1-2-img").toggleClass("building-s1-2-img-2");
  $(".news-c2-img").toggleClass("news-c2-img-2");
  $(".news-body").toggleClass("display-none");
});
$(".arrow-slider1").click(function(){
  $(".circle1").toggleClass("opacity-10");
  $(".circle2").toggleClass("full-opacity");
  $(".arrow-slider2").toggleClass("no-active");
  $(this).toggleClass("no-active");
  $(".building-s1-2-img").toggleClass("building-s1-2-img-2");
  $(".news-c2-img").toggleClass("news-c2-img-2");
  $(".news-body").toggleClass("display-none");
});

// шоперы в магазине
$(".store-text-shoper").hover(function(){
  $(".img-mask").addClass("img-mask-big");
},function(){
  $(".img-mask").removeClass("img-mask-big");
});

// форма — коты
$(".cat1, .cat2, .cat3").hover(function(){
  $(this).addClass("cat-form-hover");
},function(){
  $(this).removeClass("cat-form-hover");
});
$(".cat1").click(function(){
  $(".form-main-c2-cat1").removeClass("display-none");
  $(".form-main-c2-cat2, .form-main-c2-cat3").addClass("display-none");
  $(".h2-block-form-1").addClass("h1-cat1");
  $(this).addClass("cat-form-active");
  $(".h2-block-form-1").removeClass("h1-cat2");
  $(".h2-block-form-1").removeClass("h1-cat3");
  $(".cat2, .cat3").removeClass("cat-form-active");
});
$(".cat2").click(function(){
  $(".form-main-c2-cat2").removeClass("display-none");
  $(".form-main-c2-cat1, .form-main-c2-cat3").addClass("display-none");
  $(".h2-block-form-1").addClass("h1-cat2");
  $(this).addClass("cat-form-active");
  $(".h2-block-form-1").removeClass("h1-cat1");
  $(".h2-block-form-1").removeClass("h1-cat3");
  $(".cat1, .cat3").removeClass("cat-form-active");
});
$(".cat3").click(function(){
  $(".form-main-c2-cat3").removeClass("display-none");
  $(".form-main-c2-cat2, .form-main-c2-cat1").addClass("display-none");
  $(".h2-block-form-1").addClass("h1-cat3");
  $(this).addClass("cat-form-active");
  $(".h2-block-form-1").removeClass("h1-cat2");
  $(".h2-block-form-1").removeClass("h1-cat1");
  $(".cat2, .cat1").removeClass("cat-form-active");
});
// $(".h2-block-form-1").hover(function(){
//   $(".cat-form").addClass("cat-form-hover");
// },function(){
//   $(".cat-form").removeClass("cat-form-hover");
// });

// курсор — коты в форме
$(".button-cat").hover(function(){
  $(".cursor").addClass("cursor-hover");
  $(".cursor-circle").addClass("cursor-circle-hover");
  $(".circle_blur").addClass("circle_blur-big");
},function(){
  $(".cursor").removeClass("cursor-hover");
  $(".cursor-circle").removeClass("cursor-circle-hover");
  $(".circle_blur").removeClass("circle_blur-big");
});

// курсор — каламео
$(".calameo-frame").hover(function(){
  $(".cursor").addClass("display-none");
  $(".cursor-circle").addClass("display-none");
  $(".circle_blur").addClass("display-none");
},function(){
  $(".cursor").removeClass("display-none");
  $(".cursor-circle").removeClass("display-none");
  $(".circle_blur").removeClass("display-none");
});

// курсор — инпут
$(".form-input").hover(function(){
  $(".cursor").addClass("cursor-input");
  $(".cursor-circle").addClass("cursor-circle-input");
},function(){
  $(".cursor").removeClass("cursor-input");
  $(".cursor-circle").removeClass("cursor-circle-input");
});

// форма — выбор даты прозрачность
$(".form-date").click(function(){
  $(this).addClass("full-opacity");
});

// меню айфон
$(".menu-mobile-icon-open").click(function(){
  $(".menu-mobile-icon-close").addClass("display-flex");
  $(".menu-mobile-buttons-hidden").addClass("display-block");
  $(this).addClass("display-none");
  $(this).removeClass("display-flex");
});
$(".menu-mobile-icon-close").click(function(){
  $(".menu-mobile-icon-open").addClass("display-flex");
  $(".menu-mobile-buttons-hidden").removeClass("display-block");
  $(this).addClass("display-none");
  $(this).removeClass("display-flex");
});

// слайдер котов
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("cat-agents");
  let agentsBody = document.getElementsByClassName("agents-r2-c1");
  let agentsH2 = document.getElementsByClassName("h2-block-agents");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0%";
    agentsBody[i].style.display = "none";
    agentsH2[i].style.display = "none";
  }
  slides[slideIndex-1].style.opacity = "100%";
  agentsBody[slideIndex-1].style.display = "flex";
  agentsH2[slideIndex-1].style.display = "flex";
}
