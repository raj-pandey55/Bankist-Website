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

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// COOKIE-MESSAGE
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functonality and analytics. <button class= "btn btn--close-cookie">Got it!</button> ';

document.querySelector('.header').append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.backgroundColor = '#37383d';

message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//SMOOTH-SCROLLING FEATURE
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

const navFeatures = document.querySelector('.nav--features');

navFeatures.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

const navOperations = document.querySelector('.nav--operations');
const section2 = document.querySelector('#section--2');

navOperations.addEventListener('click', function () {
  section2.scrollIntoView({ behavior: 'smooth' });
});

const navTestimonials = document.querySelector('.nav--testimonials');
const section3 = document.querySelector('#section--3');

navTestimonials.addEventListener('click', function () {
  section3.scrollIntoView({ behavior: 'smooth' });
});
