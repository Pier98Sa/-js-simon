/*Funzioni*/
//funzione per la creazione di numeri randomici
function numRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione per creare un array di numeri casuali
function createRandomNumber(array,cicli,min,max){

    
    for(let i = 0; i < cicli;i++){

        let numero = 0 ;
        //ciclo do while per non avere duplicati
        do{
            numero = numRandom(min,max);   
        }while(array.includes(numero))

        array.push(numero);  
    }
}

//funzione per far inserire i numeri tramite il prompt con validazione del numero in entrata
function userNumberPrompt(array,numeri) {
    

    for(let i = 0; i <numeri; i++){
        let numero ;
        do{
            numero = parseInt(prompt("Inserisci un numero"));
        }while(isNaN(numero) || numero < 0 || numero >100)//validazione del numero 

        array.push(numero);
    }
}

//funzione per cambiare il tipo di display
function changeDisplay(ele1,ele2){

    ele1.classList.add('none');
    ele2.classList.remove('none');
}

//creazione di un array con i numeri uguali di due array messi a confronto
function numCompare(array1, array2,array3){

    array1.forEach(value =>{
        if(array2.includes(value)){
          array3.push(value);
        }
    });
}
//funzione per scrivere il risultato nell'html
function drawResult(container, array){
    let content =  `
                    <div>
                        <span>Hai indovinato ${array.length} numeri !!!</span>
                        <div class="box">
                            ${array}
                        </div>
                    </div>
                    `;

    container.innerHTML = content;
}
/********************************************************
 Creazione numeri ed inserimento nell'html
*******************************************************/

//inizializzo una variabile per scrivere all'interno del div number-box

let numberBoxHtml = document.getElementById('number-box');
let rememberHtml = document.getElementById('remember');
let afterRememberHtml = document.getElementById('after-remember');
let containerHtml = document.getElementById('container');

//inizializzo gli array vuoto
const numberToRemember = [];
const numUser = [];
const numCorrect = [];
//riempio l'array con 5 numeri casuali da 0 a 100
createRandomNumber(numberToRemember,5,0,100);
//inserisco i numeri all'interno dell'html
numberBoxHtml.innerHTML = numberToRemember;

/************************************************
 prendo i numeri con il prompt e do l'esito
************************************************/
setTimeout (function (){

    //cambio il display ai div nell'html
    changeDisplay(rememberHtml,afterRememberHtml);

    //funzione che parte in ritardo di 250 millesimi
    setTimeout(function() {
        //faccio inserire i numeri all'utente
        userNumberPrompt(numUser,5); 
        //li comparo per trovare i numeri inseriti correttamente
        numCompare(numberToRemember, numUser,numCorrect);
        //inserisco il risultato nell'html
        drawResult(containerHtml, numCorrect);        
    }, 250);
},1000*30);
