
import { addQuestionBtn, addNavbarBtn } from './btn.js';

import {fetchAllQuestions} from '../fetch_data/questions.js'


// integrateBtn
export function integrateBtns() {
  // current URL
  var currentUrl = window.location.href;


  if ( /https:\/\/kitt\.lewagon\.com\/camps\/\d+.*/.test(currentUrl) ) {
  // actions to be performed in Challanges URL

    // question btn
    addQuestionBtn();

    // navbar btn
    addNavbarBtn();


  } else if ( /https:\/\/kitt\.lewagon\.com\/knowledge\/.+/.test(currentUrl) ) {
    // actions to be performed in Knowledge URL

    // navbar btn
    addNavbarBtn();

  }
};




// add Syllabus

function addSyllabusContent() {

  // addHtml
  var syllabus_content = document.querySelector('.syllabus-content')
  // syllabus_content.innerHTML = '<html> <head> <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> <link rel="stylesheet" type="text/css" href="style.css"> </head> <body> <p id="teste"></p> <h1>Auxilium - About Blocks</h1> <div class="show-wrapper" style="display: flex; align-items: center; justify-content: space-around;"> <div class="left-area" style="flex: 0 0 200px; display: flex; flex-direction: column; align-items: center; justify-content: space-around;"> <img class="card-user" style="height: 50px; width: 50px; border-radius: 50%;" src="https://kitt.lewagon.com/placeholder/users/Talves6"> <br> <div class="voting"> <p align="center"><i class="fas fa-thumbs-up"></i></p> <p>6 votes</p> <p align="center"><i class="fas fa-thumbs-down"></i></p> </div> </div> <div class="right-area" style="flex: 1 1 auto;"> <p>Um cabrão sem sorte - Ontem de madrugada</p> <h3>About Blocks</h3> <p>Todavia, a constante divulgação das informações ainda não demonstrou convincentemente que vai participar na mudança dos métodos utilizados na avaliação de resultados. As experiências acumuladas demonstram que a estrutura atual da organização desafia a capacidade de equalização do sistema de participação geral. Desta maneira, o consenso sobre a necessidade de qualificação facilita a criação do processo de comunicação como um todo. No entanto, não podemos esquecer que o acompanhamento das preferências de consumo estimula a padronização do investimento em reciclagem técnica.</p> </div> </div> </body></html>'
  syllabus_content.innerHTML = '<p id="teste"></p> <h1>Auxilium - About Blocks</h1> <div class="show-wrapper" style="display: flex; align-items: center; justify-content: space-around;"> <div class="left-area" style="flex: 0 0 200px; display: flex; flex-direction: column; align-items: center; justify-content: space-around;"> <img class="card-user" style="height: 50px; width: 50px; border-radius: 50%;" src="https://kitt.lewagon.com/placeholder/users/Talves6"> <br> <div class="voting"> <p align="center"><i class="fas fa-thumbs-up"></i></p> <p>6 votes</p> <p align="center"><i class="fas fa-thumbs-down"></i></p> </div> </div> <div class="right-area" style="flex: 1 1 auto;"> <p>Um cabrão sem sorte - Ontem de madrugada</p> <h3>About Blocks</h3> <p>Todavia, a constante divulgação das informações ainda não demonstrou convincentemente que vai participar na mudança dos métodos utilizados na avaliação de resultados. As experiências acumuladas demonstram que a estrutura atual da organização desafia a capacidade de equalização do sistema de participação geral. Desta maneira, o consenso sobre a necessidade de qualificação facilita a criação do processo de comunicação como um todo. No entanto, não podemos esquecer que o acompanhamento das preferências de consumo estimula a padronização do investimento em reciclagem técnica.</p> </div> </div>'

  // insertQuestion
  function insertQuestionOne(response) {
    var div = document.getElementById('teste')
    var text = response.data[0].title
    div.innerText = text;
  };
  fetchAllQuestions().then(insertQuestionOne);
};

export function addSyllabusOnCLick () {
  var btns = document.querySelectorAll('#solution-link');
  btns[1].addEventListener('click', addSyllabusContent)
};


