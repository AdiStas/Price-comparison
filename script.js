'use strict';

let firstProductPrice = document.querySelector('#first-product__price--input');
let firstProductWeight = document.querySelector('#first-product__weight--input');

let secondProductPrice = document.querySelector('#second-product__price--input');
let secondProductWeight = document.querySelector('#second-product__weight--input');

let calculateBtn = document.querySelector('.calculate-btn');
let resetBtn = document.querySelector('.reset-btn');
let result = document.querySelector('.result');

const oneKilogram = 1000;

calculateBtn.addEventListener('click', function() {
	let firstProductPriceValue = firstProductPrice.value;
	let firstProductWeightValue = firstProductWeight.value;
	let secondProductPriceValue = secondProductPrice.value;
	let secondProductWeightValue = secondProductWeight.value;

	let firstProduct = Math.round(oneKilogram / firstProductWeightValue * firstProductPriceValue);
	let secondProduct = Math.round(oneKilogram / secondProductWeightValue * secondProductPriceValue);

	if (firstProduct > secondProduct) {
		result.classList.remove('alert-text');
		result.textContent = "Цена товара №1 за кг: "
		+ firstProduct.toFixed(2) + " рублей, а цена товара №2 "
		+ secondProduct.toFixed(2) + ". Выгоднее купить товар №2";
	} else if (firstProduct < secondProduct) {
		result.classList.remove('alert-text');
		result.textContent = "Цена товара №1 за кг: " 
		+ firstProduct.toFixed(2) + " рублей, а цена товара №2 " 
		+ secondProduct.toFixed(2) + ". Выгоднее купить товар №1";
	} else if (firstProductPriceValue === "" || firstProductWeightValue === "" || secondProductPriceValue === "" || secondProductWeightValue === "") {
		result.classList.add('alert-text');
		result.textContent = "Не хватает данных для расчета"; 
	} else {
		result.classList.remove('alert-text');
		result.textContent = "Цена равна, выбирайте который больше нравится";
	}
});

resetBtn.addEventListener('click', function() {
	result.textContent = '';
	firstProductPrice.value = '';
	firstProductWeight.value = '';
	secondProductPrice.value = '';
	secondProductWeight.value = '';
});