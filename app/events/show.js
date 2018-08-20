import { fetchQuestion } from '../fetch_data/questions.js';


export function show(id) {

  function insertQuestion(response) {
    console.log(response);
  };



  fetchQuestion(id).then(insertQuestion);
};

