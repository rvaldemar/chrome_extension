export function addNavbarBtn() {
  var div = document.querySelector('.left-nav');
  var link = '<a class="auxilium" href="#"><span class="d-inline d-lg-none"><i class="mdi mdi-cards" title="Forum"></i></span><span class="d-none d-lg-inline">Forum</span></a>';
  div.insertAdjacentHTML('beforeend', link);
}

export function addQuestionBtn() {
  var div = document.querySelector('#exercise_results');
  var button = '<a class="auxilium btn btn-default btn-question" id="solution-link" href="#">Go to the forum</a>';
  div.insertAdjacentHTML('beforeend', button);
}

