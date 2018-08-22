import axios from 'axios';


var domain = 'http://localhost:3000'


//fetchAllQuestions
export function fetchAllQuestions(callback) {
  return axios.get(domain + '/api/v1/questions');
}


//fetchQuestion
export function fetchQuestion(questionId) {
  return axios.get(domain + '/api/v1/questions/' + questionId);
}


//fetchSearchedQuestions
export function fetchSearchedQuestions(string) {
  return axios.get(domain + '/api/v1/search/' + string);
}
