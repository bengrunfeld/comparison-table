// const fixed = document.getElementsByClassName("fixed-1");

// for (let i = 0; i < fixed.length; i++) {
//   console.log('hi', , fixed[i].offsetWidth)

//   const vw = Math.max(document.documentElement.clientWidth, window.innerWidth)

//   const pos = vw - (fixed[i].children[0].offsetWidth / 2)

//   fixed[i].children[0].style.left = vw

//   // fixed[i].children[0].style.left = calc(100% -fixed[i].children[0].offsetWidth);
// }

// // (function(window) {
// //   /* A full compatability script from MDN: */
// //   var supportPageOffset = window.pageXOffset !== undefined;
// //   var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

// //   /* Set up some variables  */
// //   var container = document.getElementById("fixed-container-1");

// //   /* Add an event to the window.onscroll event */
// //   window.addEventListener("scroll", function(e) {
// //     /* A full compatability script from MDN for gathering the x and y values of scroll: */
// //     var y = supportPageOffset
// //       ? window.pageYOffset
// //       : isCSS1Compat
// //       ? document.documentElement.scrollTop
// //       : document.body.scrollTop;

// //     demoItem3.style.top = -y + 50 + "px";
// //   });
// // })(window);
