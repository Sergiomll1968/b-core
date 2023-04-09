// Function to evaluate the input
function evaluate() {
  try {
    let expression = document.querySelector('.input').innerHTML;
    let ans = eval(expression);
    document.querySelector('.output').innerHTML = ans;
  } catch (err) {
    document.querySelector('.output').innerHTML = 'Error';
  }
}

// Function to display the input
function display(value) {
  document.querySelector('.input').innerHTML += value;
}

// Get all buttons
let btns = document.querySelectorAll('button');

// Assign function to each button
btns.forEach((btn) => {
  if (btn.classList.contains('number') || btn.classList.contains('decimal')) {
    btn.addEventListener('click', () => {
      let number = btn.getAttribute('data-value');
      display(number);
    });
  }
  if (btn.classList.contains('operator')) {
    btn.addEventListener('click', () => {
      let operator = btn.getAttribute('data-value');
      display(operator);
    });
  }
  if (btn.classList.contains('function')) {
    btn.addEventListener('click', () => {
      let functionName = btn.getAttribute('data-value');
      display(functionName + '(');
    });
  }
  if (btn.classList.contains('evaluate')) {
    btn.addEventListener('click', evaluate);
  }
  if (btn.classList.contains('clear')) {
    btn.addEventListener('click', () => {
      let exp = document.querySelector('.input').innerHTML;
      document.querySelector('.input').innerHTML = exp.slice(0, exp.length - 1);
    });
  }
});
