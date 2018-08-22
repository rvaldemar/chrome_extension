
import { addQuestionBtn, addNavbarBtn } from './btn.js';



// integrateBtn
export function integrateBtns() {
  // current URL
  var currentUrl = window.location.href;


  if ( /https:\/\/kitt\.lewagon\.com\/camps\/\d+.*/.test(currentUrl) ) {
  // actions to be performed in Challanges URL

    // question btn
    addQuestionBtn();

    // navbar btn
    //addNavbarBtn();


  } else if ( /https:\/\/kitt\.lewagon\.com\/knowledge\/.+/.test(currentUrl) ) {
    // actions to be performed in Knowledge URL

    // navbar btn
    //addNavbarBtn();

  }
};







// export function ajaxIntegration () {
//   (function() {
//       var send = XMLHttpRequest.prototype.send;
//       XMLHttpRequest.prototype.send = function() {
//           this.addEventListener('load', function() {
//               // console.log('global handler', this.responseText)
//               // add your global handler here
//               console.log('!');


//           })
//           return send.apply(this, arguments)
//       }
//   })()
// }

// // insert stuff in the head
// var head = document.querySelector('head');


// // add handlebars
// export function insertHandleBars () {
//   head.insertAdjacentHTML('beforeend', "<script src='https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.amd.min.js'></script>")
// };

