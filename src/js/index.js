import '../scss/default.scss';
import '../scss/client_home.scss';
import '../menu.html';
// import {includeHTML} from './includeHtml';

const clientLoginDiv = document.querySelector('#client-form');
const providerLoginDiv = document.querySelector('#provider-form');

const clientButton = document.querySelector('#client-login');
const providerButton = document.querySelector('#provider-login');

var toggleClient = () =>{
    console.log('clientButton clicked');
    console.log('style is :: '+ clientLoginDiv.style.display);
    if (clientLoginDiv.style.display === 'none'|| providerLoginDiv.style.display === ''){
        console.log('was none');
        clientLoginDiv.style.display = 'block';
        providerLoginDiv.style.display = 'none';

    }else {
        clientLoginDiv.style.display = 'none';
    }
};
var toggleProvider = () =>{
    console.log('providerButton clicked');
    console.log('style is :: '+ clientLoginDiv.style.display);

    if (providerLoginDiv.style.display === 'none' || providerLoginDiv.style.display === ''){
        console.log('was none');
        providerLoginDiv.style.display = 'block';
        clientLoginDiv.style.display = 'none';
    }else {
        providerLoginDiv.style.display = 'none';
    }
};

clientButton.addEventListener('click',toggleClient);
providerButton.addEventListener('click',toggleProvider);

const clientLoginButton = document.querySelector('#cli_login_button');
const providerLoginButton = document.querySelector('#pro_login_button');

//Slideshow script
var slideIndex = 1;
showSlides(slideIndex);

const prevButton =  document.querySelector('a.prev');
const nextButton =  document.querySelector('a.next');
const thumbNails = document.querySelectorAll('span.dot');

prevButton.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
},);
nextButton.addEventListener('click', () => {
  showSlides(slideIndex += 1);
},);

for (let i = 0; i < thumbNails.length; i++) {
    thumbNails[i].addEventListener('click', () => {
      currentSlide(i+1);
    });
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// includeHTML();
// var carousel = (function(){
//   var box = document.querySelector('.carouselbox');
//   var next = box.querySelector('.next');
//   var prev = box.querySelector('.prev');
//   var items = box.querySelectorAll('.content li');
//   var counter = 0;
//   var amount = items.length;
//   var current = items[0];
//   box.classList.add('active');
//   function navigate(direction) {
//     current.classList.remove('current');
//     counter = counter + direction;
//     if (direction === -1 &&
//         counter < 0) {
//       counter = amount - 1;
//     }
//     if (direction === 1 &&
//         !items[counter]) {
//       counter = 0;
//     }
//     current = items[counter];
//     current.classList.add('current');
//   }
//   next.addEventListener('click', function(ev) {
//     navigate(1);
//   });
//   prev.addEventListener('click', function(ev) {
//     navigate(-1);
//   });
//   navigate(0);
// })();
