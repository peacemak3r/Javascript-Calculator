let getNumbers, firstNumber, secondNumber, operatorValue;

// Get Operators & Numbers

function clearScreen() {
    return document.getElementById('result_div').textContent = '';
}

function getNumber(){
    getNumbers = parseInt(document.activeElement.textContent);
    displayNumber(getNumbers);
}

function displayNumber(num) {
    return document.getElementById('result_div').innerHTML += num;
}

function getOperators(){
    var getOperator = document.activeElement.textContent; 
    return getOperator;
}

function getFirstInput() {
    firstNumber = parseInt(document.getElementById('result_div').textContent);
    clearScreen();
    operatorValue = getOperators();
}

function getSecondInput() {
    secondNumber = parseInt(document.getElementById('result_div').textContent);
    getResults(operatorValue);
}

// Switch Case

function getResults(operatorValue){
    switch (operatorValue){
        case '+' :
            addNumbers(firstNumber, secondNumber);
            console.log('added');
            break;
        case '-' :
            subNumbers(firstNumber, secondNumber);
            break;   
        case 'x':
            multiplyNumbers(firstNumber, secondNumber);
            break;   
        case '/':
            divideNumbers(firstNumber, secondNumber);
            break;           
            
        default:
            console.log(`Sorry Results not found.`);    
    }
}


// Airthmetic Operations


function addNumbers(firstInput, secondInput) {
    let sum = 0;
    sum = firstInput + secondInput;
    document.getElementById('result_div').textContent = sum;
}

function subNumbers(firstInput, secondInput) {
    let sub = 0;
    sub = firstInput - secondInput;
    console.log(sub);
    document.getElementById('result_div').textContent = sub;
}

function multiplyNumbers(firstInput, secondInput) {
    let mul = 0;
    mul = firstInput * secondInput;
    console.log(mul);
    document.getElementById('result_div').textContent = mul;
}

function divideNumbers(firstInput, secondInput) {
    let div = 0;
    div = firstInput / secondInput;
    console.log(div);
    document.getElementById('result_div').textContent = div;
}


// End of Airthmetic Operations


