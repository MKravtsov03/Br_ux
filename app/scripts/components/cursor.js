// import  paper from 'paper'
// import {TweenMax} from "gsap/TweenMax";

// export default () => {
//   // set the starting position of the cursor outside of the screen
//   let clientX = -100;
//   let clientY = -100;
//   const innerCursor = document.querySelector(".cursor--small");

//   const initCursor = () => {
//     // add listener to track the current mouse position
//     document.addEventListener("mousemove", e => {
//       clientX = e.clientX;
//       clientY = e.clientY;
//     });

//     // transform the innerCursor to the current mouse position
//     // use requestAnimationFrame() for smooth performance
//     const render = () => {
//       // innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
//       // if you are already using TweenMax in your project, you might as well
//       // use TweenMax.set() instead
//       TweenMax.set(innerCursor, {
//         x: clientX,
//         y: clientY
//       });

//       requestAnimationFrame(render);
//     };
//     requestAnimationFrame(render);
//   };

//   initCursor();

//   let lastX = 0;
//   let lastY = 0;
//   let isStuck = false;
//   let isOpacity = false;
//   let showCursor = false;
//   let group, stuckX, stuckY, fillOuterCursor;

//   const lerp = (a, b, n) => {
//     return (1 - n) * a + n * b;
//   };
//   let polygon
//   const shapeBounds = {
//     width: 55,
//     height: 55
//   };
//   const noiseScale = 150; // speed
//   const noiseRange = 4; // range of distortion
//   let isNoisy = false; // state
//   let bigCoordinates = [];

//   const initCanvas = () => {
//     const canvas = document.querySelector(".cursor--canvas");

//     paper.setup(canvas);
//     const strokeColor = "rgba(255, 255, 255, 0.5)";
//     const strokeWidth = 1;
//     const segments = 8;
//     const radius = 15;

//     // we'll need these later for the noisy circle


//     // the base shape for the noisy circle
//     polygon = new paper.Path.RegularPolygon(
//       new paper.Point(0, 0),
//       segments,
//       radius
//     );
//     polygon.strokeColor = strokeColor;
//     polygon.strokeWidth = strokeWidth;
//     polygon.smooth();
//     group = new paper.Group([polygon]);
//     group.applyMatrix = false;

//     // const noiseObjects = polygon.segments.map(() => new SimplexNoise());


//     // function for linear interpolation of values


//     // function to map a value from one range to another range
//     const map = (value, in_min, in_max, out_min, out_max) => {
//       return (
//         ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
//       );
//     };

//     // the draw loop of Paper.js 
//     // (60fps with requestAnimationFrame under the hood)
//     paper.view.onFrame = event => {
//       // using linear interpolation, the circle will move 0.2 (20%)
//       // of the distance between its current position and the mouse
//       // coordinates per Frame
//       lastX = lerp(lastX, clientX, 0.2);
//       lastY = lerp(lastY, clientY, 0.2);
//       group.position = new paper.Point(lastX, lastY);
//     }
//   }
//   initCanvas();

//   const initHovers = () => {

//     // find the center of the link element and set stuckX and stuckY
//     // these are needed to set the position of the noisy circle
//     const handleMouseEnter = e => {
//       const navItem = e.currentTarget;
//       const navItemBox = navItem.getBoundingClientRect();
//       stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
//       stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
//       isStuck = true;
//       if (navItem.classList.contains('menu-btn')) {
//         document.querySelector(".menu-btn").classList.add('hovered');
//         document.querySelector(".cursor--small").innerHTML = 'menu';
//         document.querySelector(".cursor--small").classList.add('menu-hovered');
//       }

//       if (navItem.classList.contains('btn')) {
//         document.querySelector(".cursor--small").classList.add('cursor--red');
//         polygon.opacity = 0
//       }
//     };

//     // reset isStuck on mouseLeave
//     const handleMouseLeave = (e) => {
//       isStuck = false;
//       const navItem = e.currentTarget;
//       polygon.fillColor = 'rgba(0,0,0,0)';
//       if (navItem.classList.contains('menu-btn')) {
//         document.querySelector(".menu-btn").classList.remove('hovered');
//         document.querySelector(".cursor--small").innerHTML = '';
//         document.querySelector(".cursor--small").classList.remove('menu-hovered');
//       }
//       document.querySelector(".cursor--small").classList.remove('cursor--red');
//       polygon.opacity = 1;
//     };

//     // add event listeners to all items
//     const linkItems = document.querySelectorAll(".link, .menu-btn");
//     linkItems.forEach(item => {
//       item.addEventListener("mouseenter", handleMouseEnter);
//       item.addEventListener("mouseleave", handleMouseLeave);
//     });
//   };
//   initHovers();

//   // the draw loop of Paper.js
//   // (60fps with requestAnimationFrame under the hood)
//   paper.view.onFrame = event => {
//     // using linear interpolation, the circle will move 0.2 (20%)
//     // of the distance between its current position and the mouse
//     // coordinates per Frame

//     if (!isStuck) {
//       // move circle around normally
//       lastX = lerp(lastX, clientX, 0.2);
//       lastY = lerp(lastY, clientY, 0.2);
//       group.position = new paper.Point(lastX, lastY);
//     } else if (isStuck) {
//       // fixed position on a nav item
//       lastX = lerp(lastX, stuckX, 0.2);
//       lastY = lerp(lastY, stuckY, 0.2);
//       group.position = new paper.Point(lastX, lastY);
//     }

//     if (isStuck && polygon.bounds.width < shapeBounds.width) {
//       // scale up the shape 
//       polygon.scale(1.1);
//     } else if (!isStuck && polygon.bounds.width > 30) {
//       // scale down the shape
//       const scaleDown = 0.92;
//       polygon.scale(scaleDown);
//     }

//     // while stuck and big, apply simplex noise
//     if (isStuck && polygon.bounds.width >= shapeBounds.width) {
//       isNoisy = true;
//       // first get coordinates of large circle
//       if (bigCoordinates.length === 0) {
//         polygon.segments.forEach((segment, i) => {
//           bigCoordinates[i] = [segment.point.x, segment.point.y];
//         });
//       }
//     }
//     polygon.smooth();
//   };

// }

import TweenMax from "gsap/TweenMax";
// import initPageTransitions from "./initPageTransitions";

/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2019, Codrops
 * http://www.codrops.com
 */

class Cursor {
  constructor() {
    // initPageTransitions();
    this.initCursor();
    this.initHovers();
  }

  initCursor() {
    const { Back } = window;
    this.outerCursor = document.querySelector(".cursor--outer");
    this.innerCursor = document.querySelector(".cursor--inner");
    this.outerCursorBox = this.outerCursor.getBoundingClientRect();
    this.outerCursorSpeed = 0;
    this.easing = Back.easeOut.config(1.7);
    this.clientX = -100;
    this.clientY = -100;
    this.showCursor = false;

    const unveilCursor = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      TweenMax.set(this.outerCursor, {
        x: this.clientX - this.outerCursorBox.width / 2,
        y: this.clientY - this.outerCursorBox.height / 2
      });
      setTimeout(() => {
        this.outerCursorSpeed = 0.2;
      }, 100);
      this.showCursor = true;
    };
    document.addEventListener("mousemove", unveilCursor);

    document.addEventListener("mousemove", e => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });

    const render = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      if (!this.isStuck) {
        TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
          x: this.clientX - this.outerCursorBox.width / 2,
          y: this.clientY - this.outerCursorBox.height / 2
        });
      }
      if (this.showCursor) {
        document.removeEventListener("mousemove", unveilCursor);
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

  initHovers() {
    const handleMouseEnter = e => {
      this.isStuck = true;
      const target = e.currentTarget;
      const box = target.getBoundingClientRect();
      this.outerCursorOriginals = {
        width: this.outerCursorBox.width,
        height: this.outerCursorBox.height
      };
      console.log(box)
      TweenMax.to(this.outerCursor, 0.2, {
        x: box.left,
        y: box.top,
        width: box.width,
        height: box.height,
        scale: 1.2,
        opacity: 0.4,
        borderColor: "#ffffff"
      });
      
      if (target.classList.contains('menu-btn')) {
        TweenMax.to(this.outerCursor, 0.4, {
          x: box.left,
          y: box.top,
          scale: 0.8,
          opacity: 0.4,
          borderColor: "#ffffff"
        });
        TweenMax.to(this.innerCursor, 0.2, {
          backgroundColor: "transparent"
        });
        document.querySelector(".menu-btn").classList.add('hovered');
        document.querySelector(".cursor--inner").innerHTML = 'menu';
        document.querySelector(".cursor--inner").classList.add('menu-hovered');
      }
      if (target.classList.contains('page-label')) {
        TweenMax.to(this.outerCursor, 0.6, {
          scale: 1.5,
          x: this.clientX,
          y: this.clientY,
          width: 30,
          height: 30,
          opacity: 0,
          borderColor: "#ffffff"
        });
      }
      
      if (target.classList.contains('menu-right__link')) {
        TweenMax.to(this.outerCursor, 0.2, {
          scale: 1.5,
          x: this.clientX,
          y: this.clientY,
          width: 30,
          height: 30,
          opacity: 0,
          borderColor: "#ffffff"
        });
      }
      if (target.classList.contains('btn')) {
        TweenMax.to(this.outerCursor, 0.2, {
          scale: 1.5,
          x: this.clientX,
          y: this.clientY,
          width: 30,
          height: 30,
          opacity: 0,
          borderColor: "#ffffff"
        });
        TweenMax.to(this.innerCursor, 0.2, {
          backgroundColor: "#cf122d"
        });
      }
      if (target.classList.contains('form-close')) {
        TweenMax.to(this.outerCursor, 0.2, {
          scale: 1.5,
          x: this.clientX,
          y: this.clientY,
          width: 30,
          height: 30,
          opacity: 0,
          borderColor: "#ffffff"
        });
      }
    };

    const handleMouseLeave = (e) => {
      this.isStuck = false;
      const target = e.currentTarget;
      TweenMax.to(this.outerCursor, 0.4, {
        width: this.outerCursorOriginals.width,
        height: this.outerCursorOriginals.height,
        opacity: 0.4,
        scale: 1,
        borderColor: "#ffffff",
      });
      TweenMax.to(this.innerCursor, 0.2, {
        backgroundColor: "#fff"
      });
      if (target.classList.contains('menu-btn')) {
        document.querySelector(".menu-btn").classList.remove('hovered');
        document.querySelector(".cursor--inner").innerHTML = '';
        document.querySelector(".cursor--inner").classList.remove('menu-hovered');
      }
    };

    const linkItems = document.querySelectorAll(".link");
    linkItems.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.addEventListener("mouseenter", handleMouseEnter);
    menuBtn.addEventListener("mouseleave", handleMouseLeave);
    const contactLink = document.querySelectorAll(".menu-right__link");
    contactLink.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    const mainNavHoverTween = TweenMax.to(this.outerCursor, 0.3, {
      backgroundColor: "#ffffff",
      ease: this.easing,
      paused: true
    });

    const mainNavMouseEnter = () => {
      this.outerCursorSpeed = 0;
      TweenMax.set(this.innerCursor, { opacity: 0 });
      mainNavHoverTween.play();
    };

    const mainNavMouseLeave = () => {
      this.outerCursorSpeed = 0.2;
      TweenMax.set(this.innerCursor, { opacity: 1 });
      mainNavHoverTween.reverse();
    };

    const mainNavLinks = document.querySelectorAll(".content--fixed a");
    mainNavLinks.forEach(item => {
      item.addEventListener("mouseenter", mainNavMouseEnter);
      item.addEventListener("mouseleave", mainNavMouseLeave);
    });
  }
}

export default Cursor;
