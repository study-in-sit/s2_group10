import clearChild from '../helpers/clearChild.js';
import Carts from './Carts.js';

class Products {
  constructor(products, containerElement, searchElement, searchBtnElement) {
    this._products = products;
    this._containerelement = containerElement;
    this._searchText = '';
    this._searchElement = searchElement;
    this._searchBtnElement = searchBtnElement;
    this._cart = new Carts(products, document.querySelector('.cart_container'));

    // Event For Search products with Name
    this._searchBtnElement.addEventListener('click', () => {
      this._searchText = this._searchElement.value;
      this.render();
    });

    this.render();
  }
  clearProductsRender() {
    clearChild(this._containerelement);
  }
  render() {
    const foodFilter = this._products.filter((e) =>
      e.Name.toLowerCase().includes(this._searchText)
    );
    this.clearProductsRender();
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
      btn.addEventListener('click', () => this._cart.addToCart(food.ID));

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
      this._containerelement.appendChild(container);
    }
  }
}

export default Products;
