import { foods } from './data.js';

let food_container = document.querySelector('.food_container');

let input_search = document.querySelector('#input_search'); //1
let search_btn = document.querySelector('#search_btn');
let show_cart_btn = document.querySelector('#show_cart');
let shopping_cart_toggle = document.querySelector('.shopping_cart'); //1

let showCart = false;
let showSearch = false;

function deleteChildFood() {
  //e.firstElementChild can be used.
  var child = food_container.lastElementChild;
  while (child) {
    food_container.removeChild(child);
    child = food_container.lastElementChild;
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
  if(showSearch) {
    input_search.style.display = 'block';
  } else {
    input_search.style.display = 'none';
  }
}

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

productList('');
showHideShoping();
showHideSearch();
