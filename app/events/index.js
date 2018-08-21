import {fetchAllQuestions} from '../fetch_data/questions.js'

import {show} from './show.js'




// add Syllabus

function addIndex() {

  // insertQuestion
  function insertTenQuestions(response) {

    //console.log(response)

    var index = 0;

    // HTML locations to inject our HTML into

    var header_content = document.querySelector('.tab-content')
    var syllabus_content = document.querySelector('#exercice-content')

    header_content.innerHTML = '<div class="form-group row"> <label for="example-search-input" class="col-2 col-form-label">Search</label> <div class="col-10"> <input class="form-control" type="search" value="Search the forum" id="example-search-input"> </div></div>';

    syllabus_content.innerHTML = '';

    var questionIds = [];

    while (index < 11) {

      var numberOfAnswers = 8;
      var questionTitle = response.data.questions[index].title;
      var timeStamp = response.data.questions[index].time;
      var ownerName = response.data.questions[index].name;
      var questionId = response.data.questions[index].id;

      // HTML locations to inject our HTML into

      // Replaces the html inside these divs
      syllabus_content.innerHTML += '<div question-id="' + questionId + '" class="card mb-0 mt-2"> <a class="trigger-select absolute-link d-none d-sm-block" href="#"></a> <div class="card-body"> <div class="d-flex flex-row bd-highlight justify-content-between align-content-center"> <div class="mr-5"> <h2 class="text-center text-secondary mt-0">' + numberOfAnswers + '</h2> <p class="text-secondary font-italic font-weight-light mb-0 mt-3" style="font-size:0.8em;">answers</p> </div> <div class="" style="flex: 1 0 auto"> <h2 class="mt-0">' + questionTitle + '</h2> <p class="text-secondary font-italic font-weight-light mb-0 mt-3" style="font-size:0.8em;">Posted ' + timeStamp + ' ago by ' + ownerName + '</p> </div> <div class=""> <img src="https://avatars2.githubusercontent.com/u/9859208?v=4" class="rounded-circle" style="max-width:50px;"> </div> </div> </div></div>';

      questionIds.push(questionId);

      index += 1;
    };

    for (var index = 0; index < 11; index++) {

      var question = document.querySelector("[question-id='" + questionIds[index] + "'] > a");

      question.addEventListener('click', function (event) {
        event.preventDefault();
        show(111);
      });

    };

  };

  fetchAllQuestions().then(insertTenQuestions);
};

export function addIndexOnClick () {
  var btns = document.querySelectorAll('#solution-link');
  btns[1].addEventListener('click', addIndex)
};
