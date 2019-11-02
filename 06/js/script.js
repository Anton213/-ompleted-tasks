let body= document.getElementsByTagName('body'),
    menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    column = document.getElementsByClassName('column'),
    adv = document.querySelector('.adv'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    prompts = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
li.classList.add('menu-item');
menu.appendChild(li);
li.textContent = 'Пятый пункт';

body[0].style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

prompts.textContent = prompt('Как вы относитесь к технике apple?', '');
