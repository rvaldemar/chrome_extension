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




/*var observer = new MutationObserver(function(){
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
*/

















import Quill from 'quill/core';

import Toolbar from 'quill/modules/toolbar';

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';
import CodeBlock from 'quill/formats/code';
import Snow from 'quill/themes/snow';


Quill.register({
  'modules/toolbar': Toolbar,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/header': Header,
  'formats/code-block': CodeBlock,
  'themes/snow': Snow
});


export default Quill;

var head = document.querySelector('head');

head.insertAdjacentHTML('beforeend', '<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">')


var header = document.getElementById('exercise-header')

header.parentNode.innerHTML = '<div id="editor"> <p>Hello World!</p> <p>Some initial <strong>bold</strong> text</p> <p><br></p></div>'
var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];
var editor = new Quill('#editor', {
  modules: { toolbar: toolbarOptions },
  theme: 'snow'
});
