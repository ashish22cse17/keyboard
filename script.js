function Value(value) {
    document.getElementById('display').value += value;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function appendDecimal() {
    let displayValue = document.getElementById('display').value;
    if (displayValue.indexOf('.') === -1) {
        document.getElementById('display').value += '.';
    }
}
// function calculate() {
//     let displayValue = document.getElementById('display').value;
//     try {
//         document.getElementById('display').value = eval(displayValue);
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }
function clearDisplay() {
    document.getElementById('display').value = '';
}
