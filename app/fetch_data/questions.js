import axios from 'axios';


var domain = 'http://localhost:3000'


//fetchAllQuestions
export function fetchAllQuestions(callback) {
  return axios.get(domain + '/api/v1/questions');
};


//fetchQuestion
export function fetchQuestion(questionId) {
  return axios.get(domain + '/api/v1/questions/' + questionId);
};


export function postNewAnswer (questionId, userName, email, avatar, content) {
  return axios.post(domain + '/api/v1/questions/' + questionId + '/answers', {
    'answer': {
      "username": userName,
      "email": email,
      "avatar": avatar,
      "content": content
    }
  });
};

