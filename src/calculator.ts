// Get reference to the display element
const display = document.getElementById('display') as HTMLInputElement;

// Initialize variables to store current and previous inputs, and the current operation
let currentInput: string = '';
let previousInput: string = '';
let operation: string | null = null;

// Function to clear the display
function clearDisplay(): void {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

// Function to append a number to the current input
function inputNumber(num: number): void {
    currentInput += num;
    updateDisplay();
}

// Function to set the current operation
function inputOperator(op: string): void {
    if (currentInput !== '') {
        operation = op;
        previousInput = currentInput;
        currentInput = '';
    }
}

// Function to calculate the result
function calculateResult(): void {
    if (operation && previousInput !== '' && currentInput !== '') {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let result: number = 0;

        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        currentInput = result.toString();
        previousInput = '';
        operation = null;
        updateDisplay();
    }
}

// Function to update the display with the current input value
function updateDisplay(): void {
    display.value = currentInput;
}
