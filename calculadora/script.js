const display = document.getElementById('display');

document.addEventListener("keydown", function(event) {
    console.log("Tecla presionada: " + event.key);
    if (event.key === "Enter") {
        calculate();
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