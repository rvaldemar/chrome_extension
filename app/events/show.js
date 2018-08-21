import { fetchQuestion } from '../fetch_data/questions.js';
// import { createAnswer } from '../app/events/create.js';





export function show(id) {

  function insertQuestion(response) {
    //console.log(response);

    var syllabus_content = document.querySelector('#exercice-content')

    var showContent = '';

    var numberOfAnswers = response.data.question.answers.length;
    var questionTitle = response.data.question.title;
    var questionContent = response.data.question.content;
    var timeStamp = response.data.question.time;
    var ownerName = response.data.question.name;
    var questionId = response.data.question.id;

    //INJECT QUESTION INFO
    showContent = '<div class="card mb-0 mt-2"> <div class="card-body auxilium-wrapper"> <!-- question --> <div class="auxilium-question d-flex flex-row bd-highlight justify-content-between align-content-center"> <div class="mr-5"> <img src="https://avatars2.githubusercontent.com/u/9859208?v=4" class="rounded-circle" style="max-width:50px;"> </div> <div class="pr-4" style="flex-grow: 1; width: 80%"> <p class="text-secondary font-italic font-weight-light mb-3 mt-0" style="font-size:0.8em;">Posted '+ timeStamp +' by '+ ownerName +'</p> <h2 class="mt-0">'+ questionTitle +'</h2> <div id="question-content-'+ questionId +'"> </div> <div class="d-flex flex-row justify-content-between align-content-center p-3"> <h2 class="text-secondary mt-auto">'+ numberOfAnswers +' Answers</h2> <a class="btn btn-default mt-auto" style="max-height:40px;" href"" id="createAnswer">Post an answer</a> </div> </div> </div> <!-- question end --> </div></div>';


    function insertContent(id, ) {

      function changeDiv(response) {
        console.log(response.data.question.content);
        var basicEditor = new Quill('#editor');
        basicEditor.setContents( JSON.parse(response.data.question.content) );

      };



      fetchQuestion(63).then(changeDiv);
    };

    insertContent(id);

    for (var i = 0; i < numberOfAnswers; i++) {

      showContent += '<div class="card mb-0 mt-2"> <div class="card-body auxilium-wrapper">';

      var numberOfComments = response.data.question.answers[i].comments.length;
      var timeStamp = response.data.question.answers[i].time;
      var answerContent = response.data.question.answers[i].content;
      var ownerName = response.data.question.answers[i].name;
      var votesValue = response.data.question.answers[i].votes;

      //INJECT ANSWER INFO
      showContent += '<div class="auxilium-answer d-flex flex-row bd-highlight justify-content-between align-content-center mt-4"> <div class="mr-5"> <img src="https://avatars2.githubusercontent.com/u/9859208?v=4" class="rounded-circle" style="max-width:35px;"> <div class="mt-5" style="text-align: center;"> <a href=""><i class="fas fa-caret-up text-secondary" style="font-size: 3em;"></i></a> <h2 class="text-secondary m-0">'+ votesValue +'</h2> <a href=""><i class="fas fa-caret-down text-secondary" style="font-size: 3em;"></i></a> </div> </div> <div class="pr-4 d-flex flex-column justify-content-between" style="flex-grow: 1; width: 80%"> <p class="text-secondary font-italic font-weight-light mb-3 mt-0" style="font-size:0.8em;">Answered '+ timeStamp +' by '+ ownerName +'</p> <p> '+ answerContent +' </p> <div class="d-flex flex-row justify-content-between align-content-center p-3"> <div class="mt-auto"> <p class="mb-0">'+ numberOfComments +' Comments</p> </div> <div class="mt-auto mb-auto"> <a class="btn btn-default mt-auto" style="max-height:40px;" href="">Post a comment</a> </div> </div> </div> </div>';

      for (var j = 0; j < numberOfComments; j++){
        var timeStamp = response.data.question.answers[i].comments[j].time;
        var commentContent = response.data.question.answers[i].comments[j].content;
        var ownerName = response.data.question.answers[i].comments[j].name;

        //INJECT COMMENT INFO
        showContent += '<div class="ml-5"> <div class="pt-4 d-flex flex-row bd-highlight justify-content-between align-content-center ml-5" style="border-top: 1px solid #dee2e6;"> <div class="mr-5"> <img src="https://avatars2.githubusercontent.com/u/9859208?v=4" class="rounded-circle" style="max-width: 30px;"> </div> <div class="pr-4" style="flex-grow: 1; width: 80%"> <p class="text-secondary font-italic font-weight-light mb-3 mt-0" style="font-size:0.8em;">Answered '+ timeStamp +' by '+ ownerName +'</p> <p> '+ commentContent +' </p> </div> </div> </div>';
      }

      showContent += '</div></div>';

    };

    syllabus_content.innerHTML = showContent;

    // console.log(questionTitle + timeStamp + ownerName + questionId +numberOfAnswers)

  };

  fetchQuestion(id).then(insertQuestion);
};

