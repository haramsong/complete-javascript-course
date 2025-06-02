'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// Old way
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
/*

*/
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');  // NodeList -> doesn't update automatically
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');  // HTMLCollection -> updates automatically when deleted
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjecentHTML
const message = document.createElement('div');  // Not in DOM
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message);   // first
header.append(message);       // last
// 2개면 마지막 하나만 추가됨(DOM Element는 unique)
// header.append(message.cloneNode(true));  // 이러면 추가됨

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove();
  // message.parentElement.removeChild(message);   // Old way -> 과거에는 remove가 없어서 부모 요소를 선택하고 자식 요소를 삭제해야 했음
});

// Styles
message.style.backgroundColor = '#37383d';  // inline styles
message.style.width = '120%';   // inline styles

// 오직 inline-style만 가져올 수 있음
console.log(message.style.height);   // Nothing
console.log(message.style.backgroundColor);   // #37383d

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(message.style.height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);     // Absolute link
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);   // custom property는 저장해도 불러올 수 없음
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src'));   // Relative link

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');  // not includes

// Don't use
logo.className = 'jonas';   // it will manipulate all