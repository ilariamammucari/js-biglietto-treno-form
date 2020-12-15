// dichiaro e assegno valore alle variabili principali
var nomePasseggero = document.getElementById('nome-utente').value;
var km = document.getElementById('kilometri').value;
var etaPasseggero = document.getElementById('fascia-eta').value;
console.log(nomePasseggero, km, etaPasseggero);
var prezzoBiglietto = km * 0.21;


// stampo nel biglietto
document.getElementById('nome').innerHTML = nomePasseggero;

document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 50 ) + 1;

document.getElementById('codice').innerHTML = Math.floor(Math.random() * (99999 - 90000) ) + 1;


