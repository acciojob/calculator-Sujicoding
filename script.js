// Calculator logic
function calculate() {
  var input = document.getElementById('input');
  var equation = input.value;

  try {
    var result = eval(equation);

    if (result === Infinity) {
      input.value = 'Infinity';
    } else if (isNaN(result)) {
      input.value = 'NaN';
    } else {
      input.value = result;
    }
  } catch (error) {
    input.value = 'Error';
  }
}

// Clear the input field
function clearInput() {
  var input = document.getElementById('input');
  input.value = '';
}

// Add event listeners to number buttons
for (var i = 0; i <= 9; i++) {
  var block = document.getElementById('block' + i);
  block.addEventListener('click', function () {
    var input = document.getElementById('input');
    input.value += this.textContent;
  });
}

// Add event listeners to operation buttons
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var dot = document.getElementById('dot');

plus.addEventListener('click', function () {
  var input = document.getElementById('input');
  input.value += '+';
});

minus.addEventListener('click', function () {
  var input = document.getElementById('input');
  input.value += '-';
});

multiply.addEventListener('click', function () {
  var input = document.getElementById('input');
  input.value += '*';
});

divide.addEventListener('click', function () {
  var input = document.getElementById('input');
  input.value += '/';
});

dot.addEventListener('click', function () {
  var input = document.getElementById('input');
  input.value += '.';
});

// Add event listener to equal button
var equal = document.getElementById('ans');
equal.addEventListener('click', calculate);

// Add event listener to clear button
var clear = document.getElementById('clr');
clear.addEventListener('click', clearInput);

