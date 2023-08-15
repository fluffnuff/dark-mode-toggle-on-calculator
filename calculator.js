const body = document.body;
const icon = document.querySelector('.js-dark-mode-button');
const calculator = document.querySelector('.calculator');
const button1 = document.querySelector('.js-button-1');
const button2 = document.querySelector('.js-button-2');
const button3 = document.querySelector('.js-button-3');
const buttonPlus = document.querySelector('.js-button-plus');
const button4 = document.querySelector('.js-button-4');
const button5 = document.querySelector('.js-button-5');
const button6 = document.querySelector('.js-button-6');
const buttonMinus = document.querySelector('.js-button-minus');
const button7 = document.querySelector('.js-button-7');
const button8 = document.querySelector('.js-button-8');
const button9 = document.querySelector('.js-button-9');
const buttonTimes = document.querySelector('.js-button-times');
const button0 = document.querySelector('.js-button-0');
const buttonPoint = document.querySelector('.js-button-point');
const buttonEqual = document.querySelector('.js-button-equal');
const buttonDivide = document.querySelector('.js-button-divide');
const clearButton = document.querySelector('.js-clear-button');

let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

let display = document.querySelector('.js-calculator');
let result = document.getElementById('result');
result.innerHTML = '     ';

if (calculation) {
    display.innerHTML = calculation;
}

function updateCalculation(operation) {
    result.style.height = '';

    if (operation === '') {
        calculation = eval(calculation);
        display.innerHTML = calculation;
        localStorage.setItem('calculation', JSON.stringify(calculation));
        return;
    }

    if (result.innerHTML.length >= 44) {
        result.style.fontSize = '2px';
        calculation += operation;
        display.innerHTML = calculation;
        localStorage.setItem('calculation', JSON.stringify(calculation));
        return;
    }

    if (result.innerHTML.length >= 22) {
        result.style.fontSize = '5px';
        calculation += operation;
        display.innerHTML = calculation;
        localStorage.setItem('calculation', JSON.stringify(calculation));
        return;
    }

    if (result.innerHTML.length >= 15) {
        result.style.fontSize = '10px';
        calculation += operation;
        display.innerHTML = calculation;
        localStorage.setItem('calculation', JSON.stringify(calculation));
        return;
    }

    if (result.innerHTML.length >= 11) {
        result.style.fontSize = '15px';
        calculation += operation;
        display.innerHTML = calculation;
        localStorage.setItem('calculation', JSON.stringify(calculation));
        return;
    }

    if (result.innerHTML.length >= 9) {
        result.style.fontSize = '20px';
        calculation += operation;
        display.innerHTML = calculation;
        localStorage.setItem('calculation', JSON.stringify(calculation));
        return;
    }

    calculation += operation;
    display.innerHTML = calculation;
    localStorage.setItem('calculation', JSON.stringify(calculation));
}

function clearCalculation() {
    calculation = '';
    result.style.fontSize = '25px';
    display.innerHTML = calculation;
    localStorage.removeItem('calculation');
}

function toggleDarkMode() {
    if (body.classList.contains('dark')) {
        makeLight();
    } else {
        makeDark();
    }
}

function makeLight() {
    body.classList.remove('dark');
    icon.innerHTML = '<img class="light-mode-icon" src="icons/light-mode.png">';
    icon.classList.remove('is-dark');
    calculator.classList.remove('dark-calculator');
    button1.classList.remove('is-dark-button');
    button2.classList.remove('is-dark-button');
    button3.classList.remove('is-dark-button');
    buttonPlus.classList.remove('is-dark-button');
    button4.classList.remove('is-dark-button');
    button5.classList.remove('is-dark-button');
    button6.classList.remove('is-dark-button');
    buttonMinus.classList.remove('is-dark-button');
    button7.classList.remove('is-dark-button');
    button8.classList.remove('is-dark-button');
    button9.classList.remove('is-dark-button');
    buttonTimes.classList.remove('is-dark-button');
    button0.classList.remove('is-dark-button');
    buttonPoint.classList.remove('is-dark-button');
    buttonEqual.classList.remove('is-dark-button');
    buttonDivide.classList.remove('is-dark-button');
    clearButton.classList.remove('is-dark-button');
}

function makeDark() {
    body.classList.add('dark');
    icon.innerHTML = '<img class="dark-mode-icon" src="icons/dark-mode.png">';
    icon.classList.add('is-dark');
    calculator.classList.add('dark-calculator');
    button1.classList.add('is-dark-button');
    button2.classList.add('is-dark-button');
    button3.classList.add('is-dark-button');
    buttonPlus.classList.add('is-dark-button');
    button4.classList.add('is-dark-button');
    button5.classList.add('is-dark-button');
    button6.classList.add('is-dark-button');
    buttonMinus.classList.add('is-dark-button');
    button7.classList.add('is-dark-button');
    button8.classList.add('is-dark-button');
    button9.classList.add('is-dark-button');
    buttonTimes.classList.add('is-dark-button');
    button0.classList.add('is-dark-button');
    buttonPoint.classList.add('is-dark-button');
    buttonEqual.classList.add('is-dark-button');
    buttonDivide.classList.add('is-dark-button');
    clearButton.classList.add('is-dark-button');
}