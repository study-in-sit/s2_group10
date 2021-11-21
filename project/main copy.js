import { getCookie, setCookie } from './helpers/cookie.js';
import { foods } from './data/index.js';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from './helpers/localstorage.js';

let food_container = document.querySelector('.food_container');

let input_search = document.querySelector('#input_search'); //1
let search_btn = document.querySelector('#search_btn');
let show_cart_btn = document.querySelector('#show_cart');
let shopping_cart_toggle = document.querySelector('.shopping_cart'); //1
let cart_container = document.querySelector('.cart_container');
let summary_price = document.querySelector('.summary_price');
let remove_icon_ico = document.querySelector('.remove_icon');
let enter_name = document.querySelector('.enter-name-popUp');
let btn_enter_name = document.querySelector('#btn-enter-name');
let name_input = document.querySelector('#name-input');
let name_value = document.querySelector('#name_value');

let showCart = false;
let showSearch = false;

let carts = [];

function deleteChildFood() {
  //e.firstElementChild can be used.
  var child = food_container.lastElementChild;
  while (child) {
    food_container.removeChild(child);
    child = food_container.lastElementChild;
  }
}

function deleteChildFoods() {
  //e.firstElementChild can be used.
  var child = cart_container.lastElementChild;
  while (child) {
    cart_container.removeChild(child);
    child = cart_container.lastElementChild;
  }
}

show_cart_btn.addEventListener('click', () => {
  showCart = !showCart;
  showHideShoping();
});

const showHideShoping = () => {
  if (showCart) {
    shopping_cart_toggle.style.display = 'block';
  } else {
    shopping_cart_toggle.style.display = 'none';
  }
};

const showHideSearch = () => {
  if (showSearch) {
    input_search.style.display = 'block';
  } else {
    input_search.style.display = 'none';
  }
};

const summaryCalculator = () => {
  const priceSum = carts.reduce((prev, current) => {
    return prev + current.productDetails.Price * current.amount;
  }, 0);
  const TotalSum = carts.reduce((prev, current) => {
    return prev + current.amount;
  }, 0);
  summary_price.textContent = `Total foods : ${TotalSum} dishes , Total Price : ${priceSum} ฿`;
};

const addCartToStorage = () => {
  removeLocalStorage('carts');
  setLocalStorage('carts', carts);
};

const loadCartsHistory = () => {
  const result = getLocalStorage('carts');
  if (result) {
    carts = result;
    if (carts.length !== 0) {
      showCart = true;
      showHideShoping();
      summaryCalculator();
    }
  }
};

const addToCart = (id) => {
  const indexFoodCart = carts.findIndex((e) => e.productDetails.ID === id);
  if (indexFoodCart === -1) {
    carts.push({
      productDetails: foods.find((e) => e.ID === id),
      amount: 1,
    });
  } else {
    carts[indexFoodCart].amount = carts[indexFoodCart].amount + 1;
  }
  showCart = true;
  showHideShoping();
  cartList();
  summaryCalculator();
  addCartToStorage();
};

const removeAllCartsList = () => {
  const confirm = window.confirm('Are you sure delete all carts');
  if (confirm) {
    carts = [];
    removeLocalStorage('carts');
    showCart = false;
    showHideShoping();
    cartList();
    summaryCalculator();
  }
};

const cartList = () => {
  deleteChildFoods();
  for (const cart of carts) {
    let cartItemContainer = document.createElement('div');
    cartItemContainer.className = 'cart_item';
    let ImgFood = document.createElement('img');
    ImgFood.src = cart.productDetails.Img;
    ImgFood.alt = cart.productDetails.Name;
    let cartDeatil = document.createElement('div');
    let Name = document.createElement('h3');
    Name.textContent = `Name : ${cart.productDetails.Name}`;
    let Amount = document.createElement('h3');
    Amount.textContent = `Amount : ${cart.amount}`;
    let Price = document.createElement('h3');
    Price.textContent = `Price : ${cart.amount * cart.productDetails.Price}`;
    cartDeatil.appendChild(Name);
    cartDeatil.appendChild(Amount);
    cartDeatil.appendChild(Price);
    cartItemContainer.appendChild(ImgFood);
    cartItemContainer.appendChild(cartDeatil);
    cart_container.appendChild(cartItemContainer);
  }
};

const productList = (value = '') => {
  const foodFilter = foods.filter((e) => e.Name.toLowerCase().includes(value));
  deleteChildFood();
  for (const food of foodFilter) {
    // create container element
    let container = document.createElement('div');
    container.className = 'food_item';
    container.key = food.ID;
    // create image element and append to imageContainer
    let imageContainer = document.createElement('div');
    imageContainer.className = 'food_img';
    let image = document.createElement('img');
    image.src = food.Img;
    image.alt = food.Name;
    imageContainer.appendChild(image);
    // Create detail of food
    let Id = document.createElement('h4');
    Id.textContent = 'Id:';
    let Name = document.createElement('h4');
    Name.textContent = 'Name:';
    let Price = document.createElement('h4');
    Price.textContent = 'Price:';
    let Stock = document.createElement('h4');
    Stock.textContent = 'Stock:';

    let idValue = document.createElement('h4');
    idValue.textContent = food.ID;
    let nameValue = document.createElement('h4');
    nameValue.textContent = food.Name;
    let priceValue = document.createElement('h4');
    priceValue.textContent = food.Price + ' ฿';
    let stockValue = document.createElement('h4');
    stockValue.textContent = food.Stock;
    let btn = document.createElement('button');
    btn.className = 'btn_add';
    btn.textContent = 'Add to Cart';
    btn.addEventListener('click', () => addToCart(food.ID));

    // append all elemnt to container
    container.appendChild(imageContainer);
    container.appendChild(Id);
    container.appendChild(idValue);
    container.appendChild(Name);
    container.appendChild(nameValue);
    container.appendChild(Price);
    container.appendChild(priceValue);
    container.appendChild(Stock);
    container.appendChild(stockValue);
    container.appendChild(btn);

    food_container.appendChild(container);
  }
};

search_btn.addEventListener('click', () => {
  productList(input_search.value.toLowerCase());
  showSearch = !showSearch;
  showHideSearch();
});

remove_icon_ico.addEventListener('click', removeAllCartsList);

//name repository Cookies Funcions
const initialCall = () => {
  const nameCookie = getCookie('name');
  if (!nameCookie) {
    enter_name.style.display = 'flex';
  } else {
    enter_name.style.display = 'none';
    name_value.textContent = 'Name :' + nameCookie;
  }
};

btn_enter_name.addEventListener('click', () => {
  const nameValue = name_input.value;
  if (!nameValue) {
    alert('Please Enter Your Name');
  } else {
    setCookie('name', nameValue, 1 / 2);
    enter_name.style.display = 'none';
    name_value.textContent = 'Name :' + nameValue;
  }
});

initialCall();
loadCartsHistory();
productList('');
showHideShoping();
showHideSearch();
cartList();
