import { fetchQuestion } from '../fetch_data/questions.js';
import { addIndexOnClick } from './index.js';
// import { createAnswer } from '../app/events/create.js';


import { newAnswerOnClick, newCommentOnClick } from './create.js';

import Quill from 'quill/core';

import Toolbar from 'quill/modules/toolbar';

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';
import CodeBlock from 'quill/formats/code';
import Snow from 'quill/themes/snow';
import Underline from 'quill/formats/underline';

Quill.register({
  'modules/toolbar': Toolbar,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/header': Header,
  'formats/code-block': CodeBlock,
  'themes/snow': Snow,
  'formats/underline': Underline,
});

export default Quill;


function insertQuillContent(quillElements) {
  quillElements.forEach(function(element) {
    var editorId = '#' + element[0]
    var editor = new Quill(editorId, {
      modules: { toolbar: [] },
      theme: 'snow'
    });
    editor.setContents( JSON.parse(element[1]));
    editor.enable(false);
  })

};



function insertContent(questionContent, showQuestion) {
  var head = document.querySelector('head');

  head.insertAdjacentHTML('beforeend', '<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">');


  var editorId = '#' + showQuestion
  var editor = new Quill(editorId, {
    modules: { toolbar: [] },
    theme: 'snow'
  });
  editor.setContents( JSON.parse(questionContent));
  editor.enable(false);
};


function newCommentsOnClick(questionId) {
  var commentBtns = document.querySelectorAll('a[answer-id].btn.btn-default.mt-auto');
  commentBtns.forEach(function(element){
    element.addEventListener('click', function(){
      event.preventDefault();
      newCommentOnClick(questionId, event.target.getAttribute('answer-id'));
    })
  })
};


export function show(id) {

  function insertQuestion(response) {
    //console.log(response);

    addBackBtn();

    var syllabus_content = document.querySelector('#exercice-content');

    var showContent = '';

    var numberOfAnswers = response.data.question.answers.length;
    var questionTitle = response.data.question.title;
    var questionContent = response.data.question.content;
    var timeStamp = response.data.question.time;
    var ownerName = response.data.question.name;
    var questionId = response.data.question.id;

    //INJECT QUESTION INFO

    var showQuestion = 'question-content-'+ questionId;
    showContent = '<div class="card mb-0 mt-2"> <div class="card-body auxilium-wrapper"> <!-- question --> <div class="auxilium-question d-flex flex-row bd-highlight justify-content-between align-content-center"> <div class="mr-5"> <img src="https://avatars2.githubusercontent.com/u/9859208?v=4" class="rounded-circle" style="max-width:50px;"> </div> <div class="pr-4" style="flex-grow: 1; width: 80%"> <p class="text-secondary font-italic font-weight-light mb-3 mt-0" style="font-size:0.8em;">Posted '+ timeStamp +' by '+ ownerName +'</p> <h2 class="mt-0">'+ questionTitle +'</h2><div id="' + showQuestion + '"> </div> <div class="d-flex flex-row justify-content-between align-content-center p-3"> <h2 class="text-secondary mt-auto">'+ numberOfAnswers +' Answers</h2> <a class="btn btn-default mt-auto" style="max-height:40px;" href"" id="createAnswer">Post an answer</a> </div> </div> </div> <!-- question end --> </div></div>';


    var quillAnswerElements = [];
    var quillCommentElements = [];

    for (var i = 0; i < numberOfAnswers; i++) {

      showContent += '<div class="card mb-0 mt-2"> <div class="card-body auxilium-wrapper">';

      var numberOfComments = response.data.question.answers[i].comments.length;
      var timeStamp = response.data.question.answers[i].time;
      var answerContent = response.data.question.answers[i].content;
      var ownerName = response.data.question.answers[i].name;
      var votesValue = response.data.question.answers[i].votes;
      var answerId = response.data.question.answers[i].id;

      //INJECT ANSWER INFO
      var showAnswer = 'answer-content-'+ answerId;
      quillAnswerElements.push([showAnswer, answerContent])
      showContent += '<div class="auxilium-answer d-flex flex-row bd-highlight justify-content-between align-content-center mt-4"> <div class="mr-5"> <img src="'+ avatar +'" class="rounded-circle" style="max-width:35px;"> <div class="mt-5" style="text-align: center;"> <a href="" answer-id="' + answerId + '" class="up-vote-btn '+ upVoteId +'"><i class="fas fa-caret-up text-secondary" style="font-size: 3em;"></i></a> <h2 class="text-secondary m-0">'+ votesValue +'</h2> <a href="" answer-id="' + answerId + '" class="'+ downVoteId +'"><i class="fas fa-caret-down text-secondary" style="font-size: 3em;"></i></a> </div> </div> <div class="pr-4 d-flex flex-column justify-content-between" style="flex-grow: 1; width: 80%"> <p class="text-secondary font-italic font-weight-light mb-3 mt-0" style="font-size:0.8em;">Answered '+ timeStamp +' by '+ ownerName +'</p> <div id="' + showAnswer + '"> </div> <div class="d-flex flex-row justify-content-between align-content-center p-3"> <div class="mt-auto"> <p class="mb-0">'+ numberOfComments +' Comments</p> </div> <div class="mt-auto mb-auto"> <a class="btn btn-default mt-auto" answer-id="' + answerId + '" style="max-height:40px;" href="">Post a comment</a> </div> </div> </div> </div>';


      for (var j = 0; j < numberOfComments; j++){
        var timeStamp = response.data.question.answers[i].comments[j].time;
        var commentContent = response.data.question.answers[i].comments[j].content;
        var ownerName = response.data.question.answers[i].comments[j].name;
        var commentId = response.data.question.answers[i].comments[j].id;
        var avatar =""
        var upVoteId =""
        var downVoteId =""


        //INJECT COMMENT INFO
        var showComment = 'comment-content-'+ commentId;
        quillCommentElements.push([showComment, commentContent])
        showContent += '<div class="ml-5"> <div class="pt-4 d-flex flex-row bd-highlight justify-content-between align-content-center ml-5" style="border-top: 1px solid #dee2e6;"> <div class="mr-5"> <img src="https://avatars2.githubusercontent.com/u/9859208?v=4" class="rounded-circle" style="max-width: 30px;"> </div> <div class="pr-4" style="flex-grow: 1; width: 80%"> <p class="text-secondary font-italic font-weight-light mb-3 mt-0" style="font-size:0.8em;">Answered '+ timeStamp +' by '+ ownerName +'</p> <div id="' + showComment + '"> </div> </div> </div> </div>';
      }

      showContent += '</div></div>';

    };
    syllabus_content.innerHTML = showContent;

    newCommentsOnClick(questionId);

    insertContent(questionContent, showQuestion);

    insertQuillContent(quillAnswerElements);

    insertQuillContent(quillCommentElements);

    // console.log(questionTitle + timeStamp + ownerName + questionId +numberOfAnswers)
    newAnswerOnClick(questionId);
  };


  var me = document.querySelector(".me");
  var me_parsed = me.innerHTML.substr(me.innerHTML.indexOf("by ") + 3);
  var userName = me_parsed.substr(0, me_parsed.indexOf(" "));
  fetchQuestion(id, userName).then(insertQuestion);
};


function addBackBtn() {
  var div = document.querySelector('#exercise_results');
  var button = '<a class="auxilium btn btn-default btn-question" style="margin-top: 5px;" id="forum-link" href="#">Back to questions</a>';
  div.removeChild(div.lastChild);
  div.insertAdjacentHTML('beforeend', button);

  addIndexOnClick();
}

