const display = document.getElementById('display');

window.onload = function() {
    display.focus();
    clearDisplay();
}

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Delete") {
        clearDisplay();
    }
});

function addToDisplay(value) {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    if (display.value === '') {
        return;
    }
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}