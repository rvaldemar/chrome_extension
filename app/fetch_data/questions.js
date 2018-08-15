import axios from 'axios';


//fetchAllQuestions
export function fetchAllQuestions(callback) {
  return axios.get('http://localhost:3000/api/v1/questions');
}
