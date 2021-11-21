import Products from './models/Products.js';
import SignIn from './models/SignIn.js';
import { foods } from './data/index.js';

// Element
let food_container = document.querySelector('.food_container');
let input_search = document.querySelector('#input_search');
let search_btn = document.querySelector('#search_btn');

// SignIn
new SignIn(document.querySelector('#name_value'));

// Products Object with event and render
new Products(foods, food_container, input_search, search_btn);
