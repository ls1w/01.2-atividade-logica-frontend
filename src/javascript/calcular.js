let tempo;
let velocidade;
let distancia;
let consumo;

function limpar(){
    document.querySelector('#tempo').value = '';
    document.querySelector('#velocidade').value = '';
    document.querySelector('#distancia').innerHTML = '-';
    document.querySelector('#consumo').innerHTML = '-';
}


function calcular(){
    //calcularDistancia();
    calcularConsumo();
}



function calcularDistancia(){
    // document.querySelector('#distancia').innerHTML = 'test';
    tempo = parseInt(document.querySelector('#tempo').value);
    velocidade = parseInt(document.querySelector('#velocidade').value);

    distancia = tempo * velocidade
    document.querySelector('#distancia').innerHTML = (distancia + ' KM');
    return distancia;
}

function calcularConsumo(){
    // document.querySelector('#consumo').innerHTML = 'test2';

    let distancia = calcularDistancia();

    consumo = (distancia / 12);

    document.querySelector('#consumo').innerHTML = (consumo.toFixed(2) + ' KM/L')
    return consumo
}