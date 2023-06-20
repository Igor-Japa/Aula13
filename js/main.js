import { getTabuleiro } from "./state.js";

const eTabuleiro = document.querySelector(".tabuleiro");
const disco = document.querySelector(".disco");


let arrastado = null;

setup();

function comecaArrastar(evento){
    console.log(evento.target);
    arrastado = evento.target;

}

function recebeAlgo(evento){
    console.log(evento.target);
    if(arrastado){
        evento.target.appendChild(arrastado);
        arrastado = null;
    }
}

function passouPorcima(evento){
    evento.preventDefault();
    //console.log(evento.target);
}

function setup(){
    const tabuleiro = getTabuleiro();
    for (let i = 0; i < tabuleiro.length; i++) {
        const casa = tabuleiro[i];
        const eCasa = criaCasa(casa);
        eTabuleiro.appendChild(eCasa);
    }
}

function criaCasa(casa){
    const eCasa = document.createElement('div');
    eCasa.classList.add("casa");
    eCasa.addEventListener('dragover', passouPorcima);
    eCasa.addEventListener('drop', recebeAlgo);
    if(casa){
        const eDisco = criaDisco(casa);
        eCasa.appendChild(eDisco);
    }
    return eCasa;
}

function criaDisco(casa){
    const eDisco = document.createElement('div');
    eDisco.classList.add('disco');
    eDisco.addEventListener('dragstart', comecaArrastar);
    if(casa === 'p'){
        eDisco.classList.add('preto');
    }else{
        eDisco.classList.add('branco');
    }
    return eDisco;
}