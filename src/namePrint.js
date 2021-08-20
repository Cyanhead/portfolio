// 1.
document.querySelector('.hooman').innerHTML = 'Bunmi Oye';
document.querySelector('.zuzu').innerHTML = 'Cyanhead';

// 2.
console.log('Bunmi Oye');

// 3.
const div = document.querySelector('.two');
const btn = document.createElement('button');
btn.innerHTML = 'click me please';
div.appendChild(btn);

btn.addEventListener('click', () => {
  alert('Hi, My name is Bunmi Oye. Omae wa mou, shindeiru');
  setTimeout(() => {
    alert('NANI?!!!');
  }, 2000);
});

// I hope one of these counts as printing. Arigato
