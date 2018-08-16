export function addNavbarBtn() {
  var div = document.querySelector('.left-nav');
  var link = '<a class="" href="#"><span class="d-inline d-lg-none"><i class="mdi mdi-cards" title="Forum"></i></span><span class="d-none d-lg-inline">Forum</span></a>';
  div.insertAdjacentHTML('beforeend', link);

}


export function addQuestionBtn() {
  var div = document.querySelector('#exercise_results');

  var source   = document.getElementById("left-btn-template").innerHTML;
  var template = Handlebars.compile(source);

  var button = ;
  div.insertAdjacentHTML('beforeend', button);

}

