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

function userNumberPrompt(array,numeri) {
    

    for(let i = 0; i <numeri; i++){
        let numero = parseInt(prompt("Inserisci un numero"));
        array.push(numero);
    }
}

function changeDisplay(ele1,ele2){
    ele1.style.display = "none";
    ele2.style.display = "block";
}
function numCompare(array1, array2,array3){
    array1.forEach(value =>{
        if(array2.includes(value)){
          array3.push(value);
        }
    });
    console.log(array3);
}

function drawResult(container, array){
    let content =  `
                    <div>
                        <span>hai indovinato ${array.length} numeri</span>
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

//inizializzo l'array vuoto
const numberToRemember = [];
const numUser = [];
const numCorrect = [];
//riempio l'array con 5 numeri casuali da 0 a 100
createRandomNumber(numberToRemember,5,0,100)
//inserisco i numeri all'interno dell'html
numberBoxHtml.innerHTML = numberToRemember;

let rememberHtml = document.getElementById('remember');
let afterRememberHtml = document.getElementById('after-remember');
let containerHtml = document.getElementById('container')

setTimeout (function (){
    changeDisplay(rememberHtml,afterRememberHtml);
    setTimeout(function() {
        userNumberPrompt(numUser,5); 
        numCompare(numberToRemember, numUser,numCorrect);
        drawResult(containerHtml, numCorrect);        
    }, 250);
},1000*3)
