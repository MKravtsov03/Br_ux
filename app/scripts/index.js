import "./markup-menu";
import $ from "jquery";
// import intlTelInput from "intl-tel-input";
import sphere from './components/sphere';
import Cursor from './components/cursor';
import TweenMax from "gsap/TweenMax";
import lottie from 'lottie-web';

global.$ = global.jQuery = $;
// require('../../node_modules/intl-tel-input/build/js/intlTelInput');
// require('../../node_modules/intl-tel-input/build/js/intlTelInput-jquery');
// const uti = require('./components/utils');
document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById("page-preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 4000);
}
document.addEventListener("DOMContentLoaded", () => {
  sphere();
  // intlTelInput();
  const cursor = new Cursor;
  // var tl = new TimelineLite();
  // var tl2 = new TimelineLite();
  setTimeout(function () {
    const tlMain = new TimelineMax();
    tlMain.add(TweenMax.from(document.querySelector('#canvas'), 1.2, { opacity: 0 }));
    tlMain.add(TweenMax.from(document.querySelector('.logo img'), .8, { transform: 'translateY(50px)', opacity: 0 }));
    tlMain.add(TweenMax.from(document.querySelector('.page-inner .page-subtitle'), .6, { transform: 'translateY(30px)', opacity: 0 }));
    tlMain.add(TweenMax.from(document.querySelector('.page-inner .page-title'), .6, { transform: 'translateY(60px)', opacity: 0 }), '-=.3');
    tlMain.add(TweenMax.staggerFrom(document.querySelectorAll('.page-inner .socials-item svg'), .2, { transform: 'translateY(35px)', stagger: 0.1 }), '-=.2');
    if ($(window).width() < 768) {
      tlMain.add(TweenMax.from(document.querySelector('.page-inner .footer-label'), .6, { transform: 'translateY(30px)', opacity: 0 }), '-=.6');
      tlMain.add(TweenMax.from(document.querySelector('.menu-btn'), .4, { top: 40, opacity: 0 }), '-=2.4');
      tlMain.add(TweenMax.from(document.querySelectorAll('.page-label')[1], 1, { bottom: 140, opacity: 0 }), '-=.2');
    } else {

      tlMain.add(TweenMax.from(document.querySelector('.footer .footer-label'), .6, { transform: 'translateY(100px)', opacity: 0 }));
      tlMain.add(TweenMax.from(document.querySelector('.menu-btn'), 1, { left: -45, opacity: 0 }), '-=1');
      tlMain.add(TweenMax.from(document.querySelectorAll('.page-label')[1], 1, { right: -90, opacity: 0 }), '-=.8');
    }
    
  }, 4100);


document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.menu-canvas').classList.add('active');
  setTimeout(() => {
    document.querySelector('.menu').classList.add('active');
  }, 600);
  TweenMax.to(document.querySelector('.menu-right .logo img'), .5, { top: 0, delay: 1.7 })
  TweenMax.to(document.querySelectorAll('.menu-right__link span')[0], .5, { top: 0, delay: 1.5 })
  TweenMax.to(document.querySelectorAll('.menu-right__link span')[1], .5, { top: 0, delay: 1.7 })
  TweenMax.staggerTo(document.querySelectorAll('.menu-right .socials-item svg'), .2, { top: 0, delay: 2.3, stagger: 0.1 });
  TweenMax.from(document.querySelectorAll('.menu .footer-label')[0], .8, { opacity: 0, delay: 2.7, bottom: 0 })
  TweenMax.from(document.querySelectorAll('.menu .footer-label')[1], .8, { opacity: 0, delay: 2.7, bottom: 0 })
  
  if ($(window).width() < 993) {
    TweenMax.from(document.querySelector('.menu-right .page-label'), .6, { opacity: 0, delay: 1.6 });
    TweenMax.from(document.querySelector('.menu-right .page-label span'), .7, { transform: 'translateY(40px)', opacity: 0, delay: 2.2 });
  } else {
    TweenMax.from(document.querySelector('.menu-right .page-label'), .6, { opacity: 0, delay: 1.2 });
    TweenMax.from(document.querySelector('.menu-right .page-label span'), 1.3, { transform: 'translateY(40px)', opacity: 0, delay: 2.2 });
  }
});
document.querySelector('.menu-close').addEventListener('click', () => {
  document.querySelector('.menu').classList.remove('active');
  document.querySelector('.menu-canvas').classList.remove('active');
  TweenMax.to(document.querySelector('.menu-right .logo img'), .5, { top: 60, delay: .6 })
  TweenMax.to(document.querySelectorAll('.menu-right__link span')[0], .5, { top: 40 })
  TweenMax.to(document.querySelectorAll('.menu-right__link span')[1], .5, { top: 40 })
  TweenMax.staggerTo(document.querySelectorAll('.menu-right .socials-item svg'), .3, { top: 35, stagger: 0.2, delay: .6 })
});
const formHandlers = document.querySelectorAll('.form-opener')
formHandlers.forEach((item) => {
  item.addEventListener('click', () => {
    setTimeout(() => {
      document.querySelector('.menu-canvas').classList.remove('active');
      document.querySelector('.menu').classList.remove('active');
    }, 200)
    document.querySelector('.form-canvas').classList.add('active');
    document.querySelector('.form-holder').classList.add('active');
    const formLine = new TimelineMax();
    formLine.add(TweenMax.from(document.querySelectorAll('.form-title')[1], .8, { transform: 'translateY(20px)', opacity: 0 }), '+=.9');
    formLine.add(TweenMax.from(document.querySelectorAll('.form-caption')[1], .8, { transform: 'translateY(20px)', opacity: 0 }), '-=.5');
    formLine.add(TweenMax.staggerFrom(document.querySelectorAll('.form-group'), .3, { transform: 'translateY(35px)', opacity: 0, stagger: 0.15 }), '-=.6')
    formLine.add(TweenMax.from(document.querySelectorAll('.file-field'), .4, { transform: 'translateY(65px)'}), '-=.5');
    formLine.add(TweenMax.from(document.querySelectorAll('.btn'), .4, { transform: 'translateY(65px)'}), '-=.3');
  });
})
document.querySelector('.form-close').addEventListener('click', () => {
  document.querySelector('.form-canvas').classList.remove('active');
  document.querySelector('.form-holder').classList.remove('active');
  document.querySelector('.form-inner').classList.remove('sent');
});
// document.querySelector('.discus-form').addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   // setTimeout(() => {
//   //   document.querySelector('.form-inner').classList.remove('sent');
//   // }, 2000)
// });
const inputs = document.querySelectorAll(".form-field, .form-area");
inputs.forEach((item) => {
  item.addEventListener('keyup', function () {
    if (item.value !== '') {
      item.classList.add('content');
    } else {
      item.classList.remove('content');
    }
  });
  item.addEventListener('focus', function () {
    item.classList.remove('error');
  })
});
const fileField = document.querySelector('.file-field input');
fileField.addEventListener('change', function () {
  let percent = 0;
  let persentInterval;
  let fileName = fileField.value.substring((fileField.value.lastIndexOf('\\') + 1), fileField.value.length);
  if (fileName.length > 13) {
    fileName = `${fileName.substring(0, 11)}...`
  }
  document.querySelector(".file-field__percents").style.display = 'block';
  document.querySelector(".file-field__text").style.display = 'none';
  persentInterval = setInterval(() => {
    percent += 1;
    document.querySelector(".file-field__percents").innerHTML = `${percent}%`;
    document.querySelector(".file-field__load").style.width = `${percent}%`;
  }, 20)
  setTimeout(() => {
    clearInterval(persentInterval);
    document.querySelector(".file-field__text").innerHTML = fileName;
    document.querySelector(".file-field__percents").style.display = 'none';
    document.querySelector(".file-field__label svg").style.display = 'none';
    document.querySelector(".file-field").classList.add('loaded')
    document.querySelector(".file-field__text").style.display = 'block';
    document.querySelector(".file-field__load").style.width = `100%`;
  }, 2000)
});
const fileRemove = document.querySelector('.file-field__remove');
fileRemove.addEventListener('click', () => {
  document.querySelector(".file-field").classList.remove('loaded');
  document.querySelector(".file-field__label svg").style.display = 'block';
  document.querySelector('.file-field input').value = '';
  document.querySelector(".file-field__text").innerHTML = 'Add file';
});
$('textarea').on('scroll', function () {
  $(this).css('background-position', `0 -${$(this).scrollTop()}px`)
});
if ($(window).width() < 768) {
  $('.page-inner').append($('.footer .footer-label'));
}
$('.navigation a').on('click', (e)=> {
  e.preventDefault();
})
const element = document.getElementById("icon")
lottie.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/images/icon.json' // the path to the animation json
});
  // const input = document.getElementById("phone");
  // intlTelInput(input, {
  //   initialCountry: "auto",
  //   geoIpLookup: function (callback) {
  //     $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
  //       var countryCode = (resp && resp.country) ? resp.country : "";
  //       callback(countryCode);
  //     });
  //   },
  //   utilsScript: './components/utils' // just for formatting/placeholders etc
  // });
});
