import axios from 'axios';

var domain = 'https://auxilium-api.herokuapp.com/'

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

export function postNewQuestion (title, userName, email, avatar, content, category) {
  console.log('teta');
  console.log(category);
  return axios.post(domain + '/api/v1/questions/', {
    'question': {
      'title': title,
      'category': category,
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

export function postNewComment (questionId, userName, email, avatar, content, answerId) {
  return axios.post(domain + '/api/v1/questions/' + questionId + '/answers/' + answerId + '/comments', {
    'comment': {
      "username": userName,
      "email": email,
      "avatar": avatar,
      "content": content
    }
  });
};

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

