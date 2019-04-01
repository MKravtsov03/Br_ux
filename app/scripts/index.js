import "./markup-menu";
import sphere from './components/sphere';
import Cursor from './components/cursor';
import TweenMax from "gsap/TweenMax";


document.addEventListener("DOMContentLoaded", () => {
  sphere();
  const cursor = new Cursor;
  var tl = new TimelineLite();
  var tl2 = new TimelineLite();
  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-canvas').classList.add('active');
    setTimeout(() => {
      document.querySelector('.menu').classList.add('active');
    }, 600);
    TweenMax.to(document.querySelector('.menu-right .logo img'), .5, {top: 0, delay:1.7})
    TweenMax.to(document.querySelectorAll('.menu-right__link span')[0], .5, {top: 0, delay:1.5})
    TweenMax.to(document.querySelectorAll('.menu-right__link span')[1], .5, {top: 0, delay:1.7})
    TweenMax.staggerTo(document.querySelectorAll('.menu-right .socials-item svg'), .2, {top: 0, delay:2.3, stagger:0.1})
  });
  document.querySelector('.menu-close').addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.menu-canvas').classList.remove('active');
    TweenMax.to(document.querySelector('.menu-right .logo img'), .5, {top: 60})
    TweenMax.to(document.querySelectorAll('.menu-right__link span')[0], .5, {top: 40})
    TweenMax.to(document.querySelectorAll('.menu-right__link span')[1], .5, {top: 40})
    TweenMax.staggerTo(document.querySelectorAll('.menu-right .socials-item svg'), .3, {top: 30, stagger:0.2})
  });
  const formHandlers = document.querySelectorAll('.form-opener')
  formHandlers.forEach((item)=> {
    item.addEventListener('click', () => {
      setTimeout(()=> {
        document.querySelector('.menu-canvas').classList.remove('active');
        document.querySelector('.menu').classList.remove('active');
      }, 200)
      document.querySelector('.form-canvas').classList.add('active');
      document.querySelector('.form-holder').classList.add('active');
    });
  })
  document.querySelector('.form-close').addEventListener('click', () => {
    document.querySelector('.form-canvas').classList.remove('active');
    document.querySelector('.form-holder').classList.remove('active');
  });
  document.querySelector('.discus-form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('.form-inner').classList.add('sent');
    setTimeout(()=> {
      document.querySelector('.form-inner').classList.remove('sent');
    }, 2000)
  });
  const inputs = document.querySelectorAll(".form-field");
  inputs.forEach((item)=> {
    item.addEventListener('keyup', function(){
      if (item.value !== '') {
        item.classList.add('content');
      } else {
        item.classList.remove('content');
      }
    })
  })
});
