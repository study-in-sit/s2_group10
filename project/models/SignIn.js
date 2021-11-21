import { getCookie, setCookie } from '../helpers/cookie.js';

class SignIn {
  constructor(nameElement) {
    this._nameElement = nameElement;
    this._btn_enter_name = document.querySelector('#btn-enter-name');
    this._name_input = document.querySelector('#name-input');
    this._popUp = document.querySelector('.enter-name-popUp');

    // Event
    this._btn_enter_name.addEventListener('click', () => {
      const nameValue = this._name_input.value;
      if (!nameValue) {
        alert('Please Enter Your Name');
      } else {
        setCookie('name', nameValue, 1 / 2);
        this._popUp.style.display = 'none';
        this._nameElement.textContent = 'Name :' + nameValue;
      }
    });

    this.render();
  }
  render() {
    const nameCookie = getCookie('name');
    if (!nameCookie) {
      this._popUp.style.display = 'flex';
    } else {
      this._popUp.style.display = 'none';
      this._nameElement.textContent = 'Name :' + nameCookie;
    }
  }
}

export default SignIn;
