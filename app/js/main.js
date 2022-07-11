'use strict'
let modalMainWindow = document.querySelector('.modal'),
	modalWindow = document.querySelectorAll('.modal__window  > div'),
	drumCircle = document.querySelectorAll('.drum__circle');

drumCircle.forEach((item, i) => {
	item.addEventListener('click', function () {
		modalMainWindow.classList.add('active');
		modalWindow[i].classList.add('active');
	})
});

document.querySelector('.modal__closed').addEventListener('click', function () {
	modalWindow.forEach(elem => {
		if (elem.matches('.active')) {
			elem.classList.remove('active')
		}
	})
	modalMainWindow.classList.remove('active');
});

//Swiper
const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});
