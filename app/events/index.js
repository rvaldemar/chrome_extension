import {fetchAllQuestions, fetchSearchedQuestions} from '../fetch_data/questions.js'

import {show} from './show.js'

// add Syllabus

function addIndex(searchValue) {

  // insertQuestion
  function insertTenQuestions(response) {

    askQuestionBtn();

    var searchedQuestionsLen = response.data.questions.length;
    var index = 0;

    // HTML locations to inject our HTML into

    var header_content = document.querySelector('.tab-content')
    var syllabus_content = document.querySelector('#exercice-content')

    header_content.innerHTML = '<form name="aux-search" id="aux-form"> <div class="form-group row"> <label for="auxilium-search-input" class="col-2 col-form-label">Search</label> <div class="col-10"> <input class="form-control" name="search-contents" type="search" value="Search the forum" id="auxilium-search-input"></div></div></form>';
    header_content.innerHTML += '<div class="container"> <div class="row d-flex justify-content-between"> <div class="symbol-active col-lg-3 col-sm-6 rounded-circle symbol-single d-flex align-content-center justify-content-around"><i class="fa fa-bicycle fa-6x p-3 mt-auto mb-auto"></i></div> <div class="col-lg-3 col-sm-6 rounded-circle symbol-single d-flex align-content-center justify-content-around"><i class="fa fa-car fa-6x p-3 mt-auto mb-auto"></i></div> <div class="col-lg-3 col-sm-6 rounded-circle symbol-single d-flex align-content-center justify-content-around"><i class="fa fa-truck fa-6x p-3 mt-auto mb-auto"></i></div> <div class="col-lg-3 col-sm-6 rounded-circle symbol-single d-flex align-content-center justify-content-around"><i class="fa fa-space-shuttle fa-6x p-3 mt-auto mb-auto"></i></div> </div></div>';

    searchOnClick();

    syllabus_content.innerHTML = '';

    var questionIds = [];

    while (index < searchedQuestionsLen) {

      var numberOfAnswers = 8;
      var temporaryCategory = response.data.questions[index].category;
      var questionTitle = response.data.questions[index].title;
      var timeStamp = response.data.questions[index].time;
      var ownerName = response.data.questions[index].name;
      var questionId = response.data.questions[index].id;

      // HTML locations to inject our HTML into

      // Replaces the html inside these divs
      syllabus_content.innerHTML += '<div question-id="' + questionId + '" class="card mb-0 mt-2"> <a class="trigger-select absolute-link d-none d-sm-block" href="#"></a> <div class="card-body"> <div class="d-flex flex-row bd-highlight justify-content-between align-content-center"> <div class="mr-5"> <h2 class="text-center text-secondary mt-0">' + numberOfAnswers + '</h2> <p class="text-secondary font-italic font-weight-light mb-0 mt-3" style="font-size:0.8em;">answers</p> </div> <div class="" style="flex: 1 0 auto"> <h2 class="mt-0">' + questionTitle + ' - ' +temporaryCategory +'</h2> <p class="text-secondary font-italic font-weight-light mb-0 mt-3" style="font-size:0.8em;">Posted ' + timeStamp + ' ago by ' + ownerName + '</p> </div> <div class=""> <img src="https://avatars2.githubusercontent.com/u/9859208?v=4" class="rounded-circle" style="max-width:50px;"> </div> </div> </div></div>';

      questionIds.push(questionId);

      index += 1;
    };

    for (var index = 0; index < searchedQuestionsLen; index++) {

      var question = document.querySelector("[question-id='" + questionIds[index] + "'] > a");

      question.addEventListener('click', function (event) {
        event.preventDefault();
        show(event.target.parentNode.getAttribute('question-id'));
      });

    };

  };
  //console.log(searchValue);
  // if search input do
  fetchSearchedQuestions(searchValue).then(insertTenQuestions);
};

export function addIndexOnClick () {
  var currentCategory = document.querySelectorAll('.exercise.active span.title');
  var btns = document.querySelectorAll('#forum-link');
  var searchValue = currentCategory[0].innerText;
  btns[0].addEventListener('click', function() { addIndex(searchValue); } );
};


function searchOnClick () {
var form = document.querySelector('#aux-form');
form.addEventListener('submit', function() {
        event.preventDefault();
        var searchValue = document.forms["aux-search"]["search-contents"].value;
        addIndex(searchValue);
      });
};

function askQuestionBtn() {
  var div = document.querySelector('#exercise_results');
  var button = '<a class="auxilium btn btn-default btn-question" style="margin-top: 5px;" id="ask-link" href="#">Ask a question</a>';
  div.removeChild(div.lastChild);
  div.insertAdjacentHTML('beforeend', button);
}
