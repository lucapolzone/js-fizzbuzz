const wrapperBox = document.getElementById('wrapper-box');

let print = '';


for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizzbuzz');
      print = 'Fizzbuzz';
    } else if (i % 5 === 0) {
      console.log('Buzz');
      print = 'Buzz';
    } else if (i % 3 === 0) {
      console.log('Fizz');
      print = 'Fizz';
    } else {
      console.log(i);
      print = i;
    } 

    const box = 
    `<div class="box-style ${print}-style">
      ${print}
    </div>`;

    wrapperBox.innerHTML += box;
};