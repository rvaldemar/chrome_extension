import axios from 'axios';


var domain = 'http://localhost:3000'


//fetchAllQuestions
export function fetchAllQuestions(userName) {
  return axios.get(domain + '/api/v1/questions');
};


//fetchQuestion
export function fetchQuestion(questionId, userName) {
  return axios.get(domain + '/api/v1/questions/' + questionId + '?username=' + userName);
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

//fetchSearchedQuestions
export function fetchSearchedQuestions(string, userName, email, avatar) {
  return axios.get(domain + '/api/v1/search/?username=' + userName + '&email=' + email + '&avatar=' + avatar + '&query=' + string);
}

export function upVoteAnswer(questionId, answerId, userName){
   return axios.patch(domain + '/api/v1/questions/' + questionId + '/answers/' + answerId + '/upvote', {
    'answer': {
      "username": userName
    }
  });
}

export function downVoteAnswer(questionId, answerId, userName){
   return axios.patch(domain + '/api/v1/questions/' + questionId + '/answers/' + answerId + '/downvote', {
    'answer': {
      "username": userName
    }
  });
}
