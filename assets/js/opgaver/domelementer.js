/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
const red = document.getElementById('redFigure')
const yellow = document.getElementById('yellowFigure')
console.log(red)
console.log(yellow)

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/




// din kode her

red.style.backgroundColor = 'blue';
yellow.style.backgroundColor = 'blue';



/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her

const opgaveTwo = document.getElementById('opgaveTwo');

let nyh2 = document.createElement('h2')
nyh2.innerText = 'Jeg har løst opgave 2.1'

opgaveTwo.appendChild(nyh2);


// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her

const purpleFigures = document.getElementsByClassName('purpleFigures');
console.log(purpleFigures)


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her

let nytArray = Array.from(purpleFigures)
console.log(nytArray)

nytArray.map(element =>{
    element.style.backgroundColor = 'red'
});


/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/



// din kode her
nytArray.map(element =>{
    element.innerText = 'red'
});





/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


const opgaveFour = document.getElementById('opgaveFour');
console.log(opgaveFour)

myCardContainer = document.createElement('h2');
myCardContainer.innerText = myData.name


const h2 = document.createElement('h2');
const img = document.createElement('img');
const figcaption = document.createElement('figcaption');

console.log(myData)
const createCard = h2.innerText = myData.name
const createCard2 = img.src = myData.image
const createCard3 = figcaption.innerText = myData.description

h2.style.textTransform = 'capitalize'
img.style.width = '100%'



opgaveFour.appendChild(h2);
opgaveFour.appendChild(img);
opgaveFour.appendChild(figcaption);











// din kode her




