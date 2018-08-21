import { integrateBtns } from './app/kitt_integration/integration.js';
import { addIndexOnClick } from './app/events/index.js';
// import cookie from 'js-cookie';


// var hash = cookie.get('auxilum_hashium');
// console.log('TENHO ISTO:', hash);

// ir buscar a hash
// var token = "---666-6---6"
// cookie.set('auxilum_hashium', token);
// axios.defaults.headers.common['Authorization'] = token;

integrateBtns();

// ajaxIntegration();

addIndexOnClick();

// var send = XMLHttpRequest.prototype.send;
// XMLHttpRequest.prototype.send = function() {
//     this.addEventListener('load', function() {
//         // console.log('global handler', this.responseText)
//         // add your global handler here
//         console.log('!');


//     });
//     return send.apply(this, arguments)
// }



// chrome.tabs.executeScript(null, {
//   code: "console.log('!')"
// });


// var body = document.querySelector('body');

// script = '<script>var send = XMLHttpRequest.prototype.send; XMLHttpRequest.prototype.send = function() { this.addEventListener("load", function() { console.log("!"); }); return send.apply(this, arguments) }</script>';


// body.insertAdjacentHTML('beforeend', script);









// var links = document.querySelectorAll('.exercise')

// links.forEach(function(each) { each.addEventListener('click', console.log('!'))})



console.log('aqui')




var observer = new MutationObserver(function(){
  var rightBtn = document.querySelector('.btn-question');
  if (rightBtn == null) {
    var auxilium = document.querySelector('.auxilium');
    while (auxilium != null) {
      auxilium.parentNode.removeChild(auxilium);
      auxilium = document.querySelector('.auxilium');
    };

    integrateBtns();
    addIndexOnClick();
  }
});

var targetNode = document.querySelector('body');
var config = { attributes: true, childList: true, subtree: true };

observer.observe(targetNode, config);
