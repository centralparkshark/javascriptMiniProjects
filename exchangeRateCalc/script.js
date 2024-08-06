// Working with Data

// fetch
// fetch('source').then((request) => {
//     if(!requestAnimationFrame.ok) {
//         console.log('Oops! Something went wrong.');
//         return null;
//     }
//     return request.json();
// }). then((data) => {
//     console.log(data);
// });

// assigns return value of fetch to variable
// const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);
// console.log(fetchPromise);

// fetchPromise.then((response) => {
//     console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");
  

const currencyOne = document.getElementById("currency1");
const currencyTwo = document.getElementById("currency2");
const swapBtn = document.getElementById("swap");
const rateEl = document.getElementById("rate");
const amountOne = document.getElementById("amountOne");
const amountTwo = document.getElementById("amountTwo");

// fetch exchange rates and update the dom
function calculate()
 {
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch(`https://open.exchangerate-api.com/v6/latest/${currOne}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        const rate = data.rates[currTwo];
        rateEl.innerText = `1 ${currOne} = ${rate} ${currTwo}`

        amountTwo.value = (amountOne.value * rate).toFixed(2)
    });

 }

function swapCurrencies() {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();

}

currencyOne.addEventListener("change", calculate)
currencyTwo.addEventListener("change", calculate)
amountOne.addEventListener("input", calculate)
amountTwo.addEventListener("input", calculate)

swapBtn.addEventListener("click", swapCurrencies)

// [items.json file]
// [
//     {"id": 1, "text": "Item One"},
//     {"id": 2, "text": "Item Two"},
//     {"id": 3, "text": "Item Three"},
//     {"id": 4, "text": "Item Four"}
// ]

// function calc() {
//     fetch('items.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// const fetchPromise = fetch("https://open.exchangerate-api.com/v6/latest");

