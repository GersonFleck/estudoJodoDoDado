function geraDado(){

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return 'images/dice' + randomNumber + '.png';
}


let image1 = document.querySelectorAll('img')[0];
let image2 = document.querySelectorAll('img')[1];

image1.setAttribute('src', geraDado());
image2.setAttribute('src', geraDado());

let resultado = (image1.src === image2.src) ? 'Empate' : (image1.src > image2.src ? 'Jogador 1 ganhou' : 'Jogador 2 ganhou');
document.querySelector('h1').innerHTML = '🏆 ' + resultado;