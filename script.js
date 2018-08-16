import { integrateBtns, addSyllabusOnCLick, insertHandleBars } from './app/kitt_integration/integration.js';
import cookie from 'js-cookie';
import axios from 'axios';


// var hash = cookie.get('auxilum_hashium');
// console.log('TENHO ISTO:', hash);

// ir buscar a hash
// var token = "---666-6---6"
// cookie.set('auxilum_hashium', token);
// axios.defaults.headers.common['Authorization'] = token;

insertHandleBars();

integrateBtns();

addSyllabusOnCLick();

