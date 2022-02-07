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

let numberBoxHtml = document.getElementById('number-box');
//inizializzo l'array vuoto
const numberToRemember = [];
//riempio l'array con 5 numeri casuali da 0 a 100
createRandomNumber(numberToRemember,5,0,100)

numberBoxHtml.innerHTML = numberToRemember;
