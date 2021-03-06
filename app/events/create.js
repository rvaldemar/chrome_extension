import Quill from 'quill/core';

import Toolbar from 'quill/modules/toolbar';

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';
import CodeBlock from 'quill/formats/code';
import Snow from 'quill/themes/snow';
import Underline from 'quill/formats/underline';



import {postNewAnswer, postNewQuestion, postNewComment} from '../fetch_data/questions.js'
import {show} from './show.js';




Quill.register({
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/header': Header,
  'formats/code-block': CodeBlock,
  'themes/snow': Snow,
  'formats/underline': Underline,
});


export default Quill;


function deleteCreate() {
  event.preventDefault();
  var newQuestion = document.getElementById('new-post');
  newQuestion.parentNode.removeChild(newQuestion);
};


function submitNewAnswer(questionId, editor) {
  event.preventDefault();

  var me = document.querySelector(".me");
  var me_parsed = me.innerHTML.substr(me.innerHTML.indexOf("by ") + 3);
  var userName = me_parsed.substr(0, me_parsed.indexOf(" "));
  var email = userName + '@auxilium-mail.com';
  var avatar = me.querySelector('img').getAttribute('src');
  var content = JSON.stringify(editor.getContents());

  postNewAnswer(questionId, userName, email, avatar, content);
  document.getElementById("forum-link").click();
  deleteCreate();
}


function submitNewQuestion(editor) {
  event.preventDefault();

  var me = document.querySelector(".me");
  var me_parsed = me.innerHTML.substr(me.innerHTML.indexOf("by ") + 3);
  var userName = me_parsed.substr(0, me_parsed.indexOf(" "));
  var email = userName + '@auxilium-mail.com';
  var avatar = me.querySelector('img').getAttribute('src');
  var title = document.querySelector('#new-question-form input').value;
  var content = JSON.stringify(editor.getContents());
  var category = document.querySelectorAll('.exercise.active span.title')[0].innerText;

  postNewQuestion(title, userName, email, avatar, content, category);
  document.querySelector(".exercise.active").click();
  deleteCreate();
}

function submitNewComment(questionId, editor, answerId) {
  event.preventDefault();

  var me = document.querySelector(".me");
  var me_parsed = me.innerHTML.substr(me.innerHTML.indexOf("by ") + 3);
  var userName = me_parsed.substr(0, me_parsed.indexOf(" "));
  var email = userName + '@auxilium-mail.com';
  var avatar = me.querySelector('img').getAttribute('src');
  var content = JSON.stringify(editor.getContents());

  postNewComment (questionId, userName, email, avatar, content, answerId);
  document.getElementById("forum-link").click();
  deleteCreate();
}


export function newAnswerOnClick(questionId) {
  var createAnswerBtn = document.getElementById('createAnswer')
  createAnswerBtn.addEventListener('click', function(){
    event.preventDefault();
    var form = '<div id="new-post" class="w-100 fixed-bottom" style="max-height:400px; overflow:scroll; background-color: rgba(51,51,51, 0.9);"> <div class="new-post-wrapper w-75 mr-auto ml-auto mb-5"> <form id="new-question-form"> <div class="form-group mt-3"> <p class="text-light">Post a answer:</p> <div id="new-question"> <p>Ask your peers!</p> <p>Some initial <strong>bold</strong> text</p><p><br></p> </div> </div> <div class="new-post-buttons"> <button type="button" class="btn btn-danger" id="btn-new-post-cancel">Cancel</button> <button type="button" class="btn btn-danger" id="btn-new-post-submit">Submit answer</button> </div> </form> </div></div>';
    createAnswerBtn.insertAdjacentHTML('afterend',form);


    var toolbarOptions = [
      ['bold', 'italic', 'underline'],        // toggled buttons
      ['code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values


      ['clean']                                         // remove formatting button
    ];


    var editorId = '#new-question';
    var editor = new Quill(editorId, {
      modules: { toolbar: toolbarOptions },
      theme: 'snow'
    });


    var cancelBtn = document.getElementById('btn-new-post-cancel');
    cancelBtn.addEventListener('click', deleteCreate)

    var submitBtn = document.getElementById('btn-new-post-submit');
    submitBtn.addEventListener('click', function() {submitNewAnswer(questionId, editor);});


  });

};



export function newQuestionOnClick(questionId) {
  var head = document.querySelector('head');
  head.insertAdjacentHTML('beforeend', '<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">');
  var createQuestionBtn = document.getElementById('ask-link')
  createQuestionBtn.addEventListener('click', function(){
    event.preventDefault();
    var form = '<div id="new-post" class="w-100 fixed-bottom" style="max-height:400px; overflow:scroll; background-color: rgba(51,51,51, 0.9);"> <div class="new-post-wrapper w-75 mr-auto ml-auto mb-5"> <form id="new-question-form"> <div class="form-group mt-3"> <label class="text-light">Question title</label> <input type="text" class="form-control"> <div id="new-question"> <p>Ask your peers!</p> <p>Some initial <strong>bold</strong> text</p><p><br></p> </div> </div> <div class="new-post-buttons"> <button type="button" class="btn btn-danger" id="btn-new-post-cancel">Cancel</button> <button type="button" class="btn btn-danger" id="btn-new-post-submit">Submit question</button> </div> </form> </div></div>';
    createQuestionBtn.insertAdjacentHTML('afterend',form);


    var toolbarOptions = [
      ['bold', 'italic', 'underline'],        // toggled buttons
      ['code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values


      ['clean']                                         // remove formatting button
    ];


    var editorId = '#new-question';
    var editor = new Quill(editorId, {
      modules: { toolbar: toolbarOptions },
      theme: 'snow'
    });


    var cancelBtn = document.getElementById('btn-new-post-cancel');
    cancelBtn.addEventListener('click', deleteCreate)

    var submitBtn = document.getElementById('btn-new-post-submit');
    submitBtn.addEventListener('click', function() {submitNewQuestion(editor);});


  });

};



export function newCommentOnClick(questionId, answerId) {
  var createAnswerBtn = document.getElementById('createAnswer')
  var form = '<div id="new-post" class="w-100 fixed-bottom" style="max-height:400px; overflow:scroll; background-color: rgba(51,51,51, 0.9);"> <div class="new-post-wrapper w-75 mr-auto ml-auto mb-5"> <form id="new-question-form"> <div class="form-group mt-3"> <p class="text-light">Post a comment:</p> <div id="new-question"> <p>Ask your peers!</p> <p>Some initial <strong>bold</strong> text</p><p><br></p> </div> </div> <div class="new-post-buttons"> <button type="button" class="btn btn-danger" id="btn-new-post-cancel">Cancel</button> <button type="button" class="btn btn-danger" id="btn-new-post-submit">Submit comment</button> </div> </form> </div></div>';
  createAnswerBtn.insertAdjacentHTML('afterend',form);


  var toolbarOptions = [
    ['bold', 'italic', 'underline'],        // toggled buttons
    ['code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values


    ['clean']                                         // remove formatting button
  ];


  var editorId = '#new-question';
  var editor = new Quill(editorId, {
    modules: { toolbar: toolbarOptions },
    theme: 'snow'
  });


  var cancelBtn = document.getElementById('btn-new-post-cancel');
  cancelBtn.addEventListener('click', deleteCreate)

  var submitBtn = document.getElementById('btn-new-post-submit');
  submitBtn.addEventListener('click', function() {submitNewComment(questionId, editor, answerId);});




};
