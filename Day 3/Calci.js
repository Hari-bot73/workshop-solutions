let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return; // Prevent multiple decimals
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentOperand =='Error'?'Error' :(currentOperand ||'0'); // Show current operand or zero if empty
    console.log('Display updated to:', display.innerText);
}

function clearCalculator() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay(); // Ensure display updates to show '0'
}

function chooseOperation(op) {
    if (currentOperand === '') return; // Prevent operation without a number

    if (previousOperand !== '') {
        calculate();
    }

    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    console.log('Calculating with prev:', prev, 'current:', current, 'operation:', operation);

    if (isNaN(prev) || isNaN(current)) return; // Validate that inputs are numbers

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            if (current === 0) {
                computation = 'Error'; // Handle division by zero
                break;
            }
            computation = prev / current;
            break;
        default:
            return;
    }

    currentOperand = computation.toString();
    operation = null; // Clear the operation
    previousOperand = ''; // Reset previous operand
    updateDisplay(); // Display the result
    console.log('Computation result:', computation);
}

// Add event listeners to buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Number button clicked:', button.innerText);
        appendNumber(button.innerText);
    });
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Operation button clicked:', button.innerText);
        chooseOperation(button.innerText);
    });
});

document.querySelector('.equals').addEventListener('click', () => {
    console.log('Equals button clicked');
    calculate();
});

document.querySelector('.clear').addEventListener('click', () => {
    console.log('Clear button clicked');
    clearCalculator();
});