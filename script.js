var btn = document.querySelector('#btn');
var contato = document.querySelector('#contact');

btn.addEventListener('click', function(){
    if(contato.style.display === 'flex'){
        contato.style.display = 'none';

    } else{
        contato.style.display = 'flex'
    }
});

var skills = document.querySelector('.icoSkill');
var porcents = document.querySelector('.porcent');




