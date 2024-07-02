const counter = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

let count = 0;

increaseButton.addEventListener('click', () => {
  increaseButton.style.borderRadius = '30px';
  increaseButton.style.backgroundColor = 'green';
  increaseButton.style.color = 'white';
  increaseButton.style.width = '50px';
  increaseButton.style.height = '50px';
  increaseButton.style.fontSize = '40px';
    count++;
    counter.textContent = count;
});

decreaseButton.addEventListener('click', () => {
  decreaseButton.style.borderRadius = '30px';
  decreaseButton.style.backgroundColor ='red';
  decreaseButton.style.color = 'white';
  decreaseButton.style.width = '50px';
  decreaseButton.style.height = '50px';
  decreaseButton.style.fontSize = '40px';

    if (count => 0) {
        count--;
        counter.textContent = count;
    }
});
