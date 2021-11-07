import { foods } from './data.js';

let food_container = document.querySelector('.food_container');

for (const food of foods) {
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

  food_container.appendChild(container);
}
