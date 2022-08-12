var waypoints = $('.w').waypoint(function(direction){
  $('.w').addClass('animate__animated animate__fadeInDown');

},{
  offset: '0%'
})




var waypoints = $('.s').waypoint(function(direction){
  $('.s').addClass('animate__animated animate__fadeInLeft');

},{
  offset: '100%'
})


var waypoints = $('.t').waypoint(function(direction){
  $('.t').addClass('animate__animated animate__fadeInRight');

},{
  offset: '100%'
})


var waypoints = $('.u').waypoint(function(direction){
  $('.u').addClass('animate__animated animate__fadeInUp');

},{
  offset: '100%'
})
var waypoints = $('.v').waypoint(function(direction){
  $('.v').addClass('animate__animated animate__fadeInLeft');

},{
  offset: '100%'
})
var waypoints = $('.x').waypoint(function(direction){
  $('.x').addClass('animate__animated animate__fadeInRight');

},{
  offset: '100%'
})
var waypoints = $('.y').waypoint(function(direction){
  $('.y').addClass('animate__animated animate__bounceInDown');

},{
  offset: '100%'
})
var waypoints = $('.z').waypoint(function(direction){
  $('.z').addClass('animate__animated animate__zoomIn');

},{
  offset: '100%'
})
var waypoints = $('.a').waypoint(function(direction){
  $('.a').addClass('animate__animated animate__jackInTheBox');

},{
  offset: '100%'
})
var waypoints = $('.b').waypoint(function(direction){
  $('.b').addClass('animate__animated animate__zoomIn');

},{
  offset: '100%'
})
var waypoints = $('.c').waypoint(function(direction){
  $('.c').addClass('animate__animated animate__zoomIn');

},{
  offset: '100%'
})
var waypoints = $('.d').waypoint(function(direction){
  $('.d').addClass('animate__animated animate__zoomInDown');

},{
  offset: '100%'
})
var waypoints = $('.e').waypoint(function(direction){
  $('.e').addClass('animate__animated animate__rotateInUpRight');

},{
  offset: '100%'
})
var waypoints = $('.f').waypoint(function(direction){
  $('.f').addClass('animate__animated animate__lightSpeedInRight');

},{
  offset: '100%'
})
var waypoints = $('.g').waypoint(function(direction){
  $('.g').addClass('animate__animated animate__lightSpeedInRight');

},{
  offset: '100%'
})

$("nav ul li").click(function () { 
  
  
  $("nav ul").removeClass("open");
  if( $("nav ul").removeClass("open")){
    $(".menubtn").removeClass("open");
  }
  
})

$(".my-element").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000)
});
$(window).scroll(function (){
  if($(this).scrollTop > 100 || document.documentElement.scrollTop > 100){
    $(".my-element").fadeIn;
  }else{
    $(".my-element").fadeOut;
  }
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector(".my-element").style.display = "block";
   } else {
      document.querySelector(".my-element").style.display = "none";
   }
}


const menucon = document.querySelector(".menu-con"),
menubtn = document.querySelector(".menubtn"),
menuafter = document.querySelector(".menubtn::after"),
menubefore = document.querySelector(".menubtn::before");
const sidenav = document.querySelector("nav ul");


menucon.addEventListener("click", function(){
    menubtn.classList.toggle("open");
    
    
    sidenav.classList.toggle("open")
    
});
function openMenu() {

};

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
      
    },
  });

  const form = document.querySelector("form");
  const submit = document.querySelector(".submit");
  
  const btn = document.getElementById('btn');

 

  

  const readmorebtn = document.querySelector(".readmore");
  const readcon = document.querySelector(".read-more");

  readmorebtn.addEventListener("click", () => {
    readcon.classList.toggle("more");
    if(readcon.classList.contains("more")){
      readmorebtn.textContent = "Show less";
    }else{
      readmorebtn.textContent = "Show more";
    }
  });


  const skillitems = document.querySelectorAll(".skilll");

  skillitems.forEach(skill =>{
    skill.addEventListener("click", () => {
      skill.querySelector(".items").classList.toggle("showitem");
    })
  })

  window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("show-box-shadow", window.scrollY > 0)
  });

  var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", navHighlighter);
  function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionid = current.getAttribute("id");



        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector("nav a[href*=" + sectionid + "]").classList.add("active")
        }
        else{
            document.querySelector("nav a[href*=" + sectionid + "]").classList.remove("active")
        }
    })
  }

 