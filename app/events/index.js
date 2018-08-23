import {fetchAllQuestions, fetchSearchedQuestions} from '../fetch_data/questions.js'

import {show} from './show.js'

import {newQuestionOnClick} from './create.js'

// add Syllabus

function addIndex(searchValue, userName, email, avatar) {

  // insertQuestion
  function insertTenQuestions(response) {

    askQuestionBtn();

    var searchedQuestionsLen = response.data.questions.length;
    var index = 0;

    // HTML locations to inject our HTML into

    var header_content = document.querySelector('.tab-content')
    var syllabus_content = document.querySelector('#exercice-content')

    header_content.innerHTML = '<form name="aux-search" id="aux-form"> <div class="form-group row"> <label for="auxilium-search-input" class="col-2 col-form-label">Search</label> <div class="col-10"> <input class="form-control" name="search-contents" type="search" value="Search the forum" id="auxilium-search-input"></div></div></form>';
    header_content.innerHTML += '<div class="container"> <div class="row d-flex justify-content-between"> <div id="bicycle" class="col-lg-3 col-sm-6 rounded-circle symbol-single d-flex align-content-center justify-content-around"><i class="fa fa-bicycle fa-6x p-3 mt-auto mb-auto"></i></div> <div id="car" class="col-lg-3 col-sm-6 rounded-circle symbol-single d-flex align-content-center justify-content-around"><i class="fa fa-car fa-6x p-3 mt-auto mb-auto"></i></div> <div id="truck" class="col-lg-3 col-sm-6 rounded-circle symbol-single d-flex align-content-center justify-content-around"><i class="fa fa-truck fa-6x p-3 mt-auto mb-auto"></i></div> <div id="spaceship" class="col-lg-3 col-sm-6 rounded-circle symbol-single d-flex align-content-center justify-content-around"><i class="fa fa-space-shuttle fa-6x p-3 mt-auto mb-auto"></i></div> </div></div>';

    searchBar();

    syllabus_content.innerHTML = '';

    // Badges highlighting mechanism
    var helper = response.data.questions[0].helper
    var active = response.data.questions[0].active
    var assertive = response.data.questions[0].assertive

    var helperClass = document.getElementById("bicycle");
    var activeClass = document.getElementById("car");
    var assertiveClass = document.getElementById("truck");
    console.log(helper, active, assertive)
    if (helper) {
      helperClass.classList.add('symbol-active');
    }

    if (active) {
      activeClass.classList.add('symbol-active');
    }

    if (assertive) {
      assertiveClass.classList.add('symbol-active');
    }
    // Badges highlighting mechanism

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
  fetchSearchedQuestions(searchValue, userName, email, avatar).then(insertTenQuestions);
};

export function addIndexOnClick () {
  var currentCategory = document.querySelectorAll('.exercise.active span.title');
  var btns = document.querySelectorAll('#forum-link');
  var searchValue = currentCategory[0].innerText;
  var me = document.querySelector(".me");
  var me_parsed = me.innerHTML.substr(me.innerHTML.indexOf("by ") + 3);
  var userName = me_parsed.substr(0, me_parsed.indexOf(" "));
  var email = userName + '@auxilium-mail.com';
  var avatar = me.querySelector('img').getAttribute('src');

  btns[0].addEventListener('click', function() { addIndex(searchValue, userName, email, avatar); } );
};


function searchBar () {
var form = document.querySelector('#aux-form');
form.addEventListener('submit', function() {
    event.preventDefault();
    var searchValue = document.forms["aux-search"]["search-contents"].value;
    var me = document.querySelector(".me");
    var me_parsed = me.innerHTML.substr(me.innerHTML.indexOf("by ") + 3);
    var userName = me_parsed.substr(0, me_parsed.indexOf(" "));
    var email = userName + '@auxilium-mail.com';
    var avatar = me.querySelector('img').getAttribute('src');
    addIndex(searchValue, userName, email, avatar);
  });
};

function askQuestionBtn() {
  var div = document.querySelector('#exercise_results');
  var button = '<a class="auxilium btn btn-default btn-question" style="margin-top: 5px;" id="ask-link" href="#">Ask a question</a>';
  div.removeChild(div.lastChild);
  div.insertAdjacentHTML('beforeend', button);

  newQuestionOnClick();
}
