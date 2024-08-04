let displayValue = '';
let operator;


function calculate(operator, firstNumber, secondNumber) {
    let answer;
    if (operator == '+') {
        answer = add(firstNumber, secondNumber);
    }
    if (operator == '-') {
        answer = subtract(firstNumber, secondNumber);
    }
    if (operator == '*') {
        answer = multiply(firstNumber, secondNumber);
    }
    if (operator == '÷') {
        answer = divide(firstNumber, secondNumber);
    }
    return answer;
}

function add(a, b) {
    let numberOne = +a;
    let numberTwo = +b;
    return numberOne + numberTwo;
}

function subtract(a, b) {
    let numberOne = +a;
    let numberTwo = +b;
    return numberOne - numberTwo;
}

function multiply(a, b) {
    let numberOne = +a;
    let numberTwo = +b;
    return numberOne * numberTwo;
}

function divide(a, b) {
    let numberOne = +a;
    let numberTwo = +b;
    return numberOne / numberTwo;
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
    displayValue += '0'
});
one.addEventListener('click', () => {
    display.innerHTML += 1;
    displayValue += '1'
});
two.addEventListener('click', () => {
    display.innerHTML += 2;
    displayValue += '2'
});
three.addEventListener('click', () => {
    display.innerHTML += 3;
    displayValue += '3'
});
four.addEventListener('click', () => {
    display.innerHTML += 4;
    displayValue += '4'
});
five.addEventListener('click', () => {
    display.innerHTML += 5;
    displayValue += '5';
});
six.addEventListener('click', () => {
    display.innerHTML += 6;
    displayValue += '6';
});
seven.addEventListener('click', () => {
    display.innerHTML += 7;
    displayValue += '7';
});
eight.addEventListener('click', () => {
    display.innerHTML += 8;
    displayValue += '8';
});
nine.addEventListener('click', () => {
    display.innerHTML += 9;
    displayValue += '9';
});
addTwo.addEventListener('click', () => {
    const values = displayValue.split(' ');
    if (values.length === 3) {
        let temp = calculate(values[1], values[0], values[2]);
        display.innerHTML = +temp;
        displayValue = temp;
    }
    display.innerHTML = ' + ';
    displayValue += ' + '
});
subtractTwo.addEventListener('click', () => {
    const values = displayValue.split(' ');
    if (values.length === 3) {
        let temp = calculate(values[1], values[0], values[2]);
        display.innerHTML = +temp;
        displayValue = temp;
    }
    display.innerHTML = ' - ';
    displayValue += ' - '
});
multiplyTwo.addEventListener('click', () => {
    const values = displayValue.split(' ');
    if (values.length === 3) {
        let temp = calculate(values[1], values[0], values[2]);
        display.innerHTML = +temp;
        displayValue = temp;
    }
    display.innerHTML = ' * ';
    displayValue += ' * '
});
divideTwo.addEventListener('click', () => {
    const values = displayValue.split(' ');
    if (values[2] === '0' || values[2] === 0) {
        display.innerHTML = 'You can\'t divide by 0';
    }
    if (values.length === 3) {
        let temp = calculate(values[1], values[0], values[2]);
        display.innerHTML = +temp;
        displayValue = temp;
    }
    display.innerHTML = ' ÷ ';
    displayValue += ' ÷ '
});
clear.addEventListener('click', () => {
    display.innerHTML = '';
    displayValue = '';
});

equal.addEventListener('click', () => {
    const values = displayValue.split(' ');
    // if (values.length > 3) {
    //     let first = +calculate(values[1], values[0], values[2]);
    //     for (let i = 3; i < values.length; i += 2) {
    //         let x = +calculate(values[i], first, values[i + 1]);
    //         first = first + x;
    //     }
    //     display.innerHTML = first;
    //     displayValue = first;
    // }
    let temp = calculate(values[1], values[0], values[2]);
    display.innerHTML = +temp;
    displayValue = temp;
});