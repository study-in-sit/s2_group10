import clearChild from '../helpers/clearChild.js';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../helpers/localstorage.js';

class Carts {
  constructor(products, containerElement) {
    this._carts = [];
    this._containerElement = containerElement;
    this.products = products;
    this._showCartPopup = false;
    // Element
    this._shopping_cart_toggle = document.querySelector('.shopping_cart');
    this._show_cart_btn = document.querySelector('#show_cart');
    this._summary_price = document.querySelector('.summary_price');
    this._remove_btn = document.querySelector('.remove_icon');

    // Load From LocalStorage
    this.loadCartsHistory();

    // Event
    this._show_cart_btn.addEventListener('click', () => {
      this._showCartPopup = !this._showCartPopup;
      this.showHidePopUp();
    });
    this._remove_btn.addEventListener('click', () => {
      this.removeAll();
    });
  }
  clearCartsRender() {
    clearChild(this._containerElement);
  }

  loadCartsHistory() {
    const result = getLocalStorage('carts');
    if (result) {
      this._carts = result;
    }
    this.render();
  }

  showHidePopUp() {
    if (this._showCartPopup) {
      this._shopping_cart_toggle.style.display = 'block';
    } else {
      this._shopping_cart_toggle.style.display = 'none';
    }
  }

  removeAll() {
    const confirm = window.confirm('Are you sure delete all carts');
    if (confirm) {
      this._carts = [];
      removeLocalStorage('carts');
      this.render();
    }
  }
  summaryCalculator = () => {
    if (this._carts.length === 0) {
      this._summary_price.textContent = '';
    } else {
      const priceSum = this._carts.reduce((prev, current) => {
        return prev + current.productDetails.Price * current.amount;
      }, 0);
      const TotalSum = this._carts.reduce((prev, current) => {
        return prev + current.amount;
      }, 0);
      this._summary_price.textContent = `Total foods : ${TotalSum} dishes , Total Price : ${priceSum} ฿`;
    }
  };

  addToCart(id) {
    const indexFoodCart = this._carts.findIndex(
      (e) => e.productDetails.ID === id
    );
    if (indexFoodCart === -1) {
      this._carts.push({
        productDetails: this.products.find((e) => e.ID === id),
        amount: 1,
      });
    } else {
      console.log(this._carts[indexFoodCart]);
      this._carts[indexFoodCart].amount = this._carts[indexFoodCart].amount + 1;
    }
    this.render();
    removeLocalStorage('carts');
    setLocalStorage('carts', this._carts);
  }

  render() {
    this.clearCartsRender();
    if (this._carts.length === 0) {
      this._showCartPopup = false;
      this.showHidePopUp();
    } else {
      this._showCartPopup = true;
      this.showHidePopUp();
      for (const cart of this._carts) {
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
        Price.textContent = `Price : ${
          cart.amount * cart.productDetails.Price
        }`;
        cartDeatil.appendChild(Name);
        cartDeatil.appendChild(Amount);
        cartDeatil.appendChild(Price);
        cartItemContainer.appendChild(ImgFood);
        cartItemContainer.appendChild(cartDeatil);
        this._containerElement.appendChild(cartItemContainer);
      }
    }
    this.summaryCalculator();
  }
}

export default Carts;
