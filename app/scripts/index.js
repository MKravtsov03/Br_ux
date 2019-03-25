import "./markup-menu";
import sphere from './components/sphere';
import cursor from './components/cursor';


document.addEventListener("DOMContentLoaded", () => {
  sphere();
  cursor();
  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-canvas').classList.add('active');
    setTimeout(() => {
      document.querySelector('.menu').classList.add('active');
    }, 600);
  });
  document.querySelector('.menu-close').addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.menu-canvas').classList.remove('active');
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
});
