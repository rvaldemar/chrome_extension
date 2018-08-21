function createAnswer() {
  console.log("button pressed!!!!")

};

export function createAnswerOnClick () {
  var answerBtn = document.getElementById('createAnswer');
  answerBtn.addEventListener('click', createAnswer)
};
