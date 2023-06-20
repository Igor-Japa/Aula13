const casas = document.querySelectorAll(".casa");
const disco = document.querySelector(".disco");

console.log(casas);
console.log(disco);

disco.addEventListener('dragstart', comecaArrastar);
for (let i = 0; i < casas.length; i++) {
    const casa = casas[i];
    casa.addEventListener('dragover', passouPorcima);
    casa.addEventListener('drop', recebeAlgo);
}

let arrastado = null;

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