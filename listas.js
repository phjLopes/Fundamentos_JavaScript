// console.log('Trabalhando com listas');

// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro =' '

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
listaDeDestinos.push('Curitiba')

console.log('Destinos possiveis');
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);