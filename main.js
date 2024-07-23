let firstNumber;
let secondNumber;
let operator;

function calculate(operator, firstNumber, secondNumber) {
    let answer = 0;
    if (operator === '+') {
        answer = add(firstNumber, secondNumber);
    }
    if (operator === '-') {
        answer = subtract(firstNumber, secondNumber);
    }
    if (operator === '*') {
        answer = multiplty(firstNumber, secondNumber);
    }
    if (operator === '/') {
        answer = divide(firstNumber, secondNumber);
    }
    return answer;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const display = document.querySelector("#display");
const addTwo = document.querySelector("#add");
const subtractTwo = document.querySelector("#subtract");
const multiplyTwo = document.querySelector("#multiply");
const divideTwo = document.querySelector("#divide");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");


zero.addEventListener('click', () => {
    display.innerHTML = 0;
});
one.addEventListener('click', () => {
    display.innerHTML += 1;
});
two.addEventListener('click', () => {
    display.innerHTML += 2;
});
three.addEventListener('click', () => {
    display.innerHTML += 3;
});
four.addEventListener('click', () => {
    display.innerHTML += 4;
});
five.addEventListener('click', () => {
    display.innerHTML += 5;
});
six.addEventListener('click', () => {
    display.innerHTML += 6;
});
seven.addEventListener('click', () => {
    display.innerHTML += 7;
});
eight.addEventListener('click', () => {
    display.innerHTML += 8;
});
nine.addEventListener('click', () => {
    display.innerHTML += 9;
});
addTwo.addEventListener('click', () => {

    if (typeof firstNumber === undefined && typeof secondNumber === undefined) {
        firstNumber = display.innerHTML;
    }

    if (typeof firstNumber != undefined && typeof secondNumber === undefined) {
        secondNumber = display.innerHTML;
    }

    if (typeof firstNumber != undefined && typeof secondNumber != undefined) {
        display.innerHTML = calculate(firstNumber, secondNumber, '+')
    }

    display.innerHTML = '';
});
subtractTwo.addEventListener('click', () => {
    display.innerHTML = '';
});
multiplyTwo.addEventListener('click', () => {
    display.innerHTML = '';
});
divideTwo.addEventListener('click', () => {
    display.innerHTML = '';
});
clear.addEventListener('click', () => {
    display.innerHTML = '';
});

equal.addEventListener('click', () => {

});