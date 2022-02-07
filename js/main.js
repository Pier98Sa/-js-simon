/*Funzioni*/
//funzione per la creazione di numeri randomici
function numRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomNumber(array,cicli,min,max){

    let i = 0;
    while(i < cicli){
        let numero = 0 ;

        do{
            numero = numRandom(min,max);   
        }while(array.includes(numero))

        array.push(numero)

        i++
    }
}

function contattore (numSec,container,containerTimer,messaggio){
    let secondi = numSec;

    containerTimer.innerHTML = secondi;
    if (secondi == 0) {
        container.innerHTML = messaggio;
    } else {
        secondi--;
    }
}

function fermaContatore(elemento) {
    clearInterval(elemento);
}
/********************************************************
 Creazione numeri ed inserimento nell'html
 *******************************************************/

//inizializzo una variabile per scrivere all'interno del div number-box

let numberBoxHtml = document.getElementById('number-box');
//inizializzo l'array vuoto
const numberToRemember = [];
//riempio l'array con 5 numeri casuali da 0 a 100
createRandomNumber(numberToRemember,5,0,100)
//inserisco i numeri all'interno dell'html
numberBoxHtml.innerHTML = numberToRemember;

let rememberHtml = document.getElementById('remember');
let timerHtml = document.getElementById('timer');

let timer = setInterval(contattore(30,rememberHtml,timerHtml,"Inserisci i 5 numeri che hai appena visto"),1000)
fermaContatore(timer);

