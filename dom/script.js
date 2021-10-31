var teamom = document
  .getElementById('Section2')
  .getElementsByClassName('group10');

teamom[0].textContent = 'My team has group 10';

teamom[0].style.color = 'red';

const one = document.querySelector('#Section2 .group10');
const all = document.querySelectorAll('#Section2 .group10');

console.log(one);
console.log(all);
