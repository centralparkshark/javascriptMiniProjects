const addUserBtn = document.getElementById("addUser");
const doubleMoneyBtn = document.getElementById("doubleMoney");
const showMillionairesBtn = document.getElementById("showMillionaires");
const sortRichestBtn = document.getElementById("sortRichest");
const calculateWealthBtn = document.getElementById("calculateWealth");

const table = document.getElementById("table")

let people = [];
getRandomUser();
getRandomUser();
getRandomUser();

// get user from api and generate wealth
async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const nameObject = data.results[0].name;
    const fullName = `${nameObject.first} ${nameObject.last}`;
    const person = {
        name: fullName,
        money: Math.floor(Math.random() * 1000000)}
    addData(person);
}

// add new object to people array
function addData(obj) {
    people.push(obj)
    updateDOM()
}

// display people
function updateDOM(providedData = people) {
    // clear table
    table.innerHTML = '<tr> <th>Person</th><th>Wealth</th></tr>'
    
    providedData.forEach((person) => {
        const row = table.insertRow();
        row.insertCell(0).innerHTML = person.name;
        row.insertCell(1).innerHTML = `$${person.money}`;
    }
)
}

function addUser() {
    // for each
    getRandomUser()

}

function doubleMoney() {
    // map
    people.forEach((person, index) => {
        person.money *= 2;
        table.rows[index + 1].cells[1].innerHTML = `$${person.money}`;
    })
}

function showMillionaires() {
    // filter
    people = people.filter((person) => {
        return person.money > 1000000
    })
    updateDOM()
}  

function sortRichest() {
    people.sort(function(a, b) {
        return parseFloat(a.money) - parseFloat(b.money) 
    })
    updateDOM();

}

function calculateWealth() {
    // reduce
    let sum = people.reduce(function (acc, person) {return acc + person.money}, 0);
    
    const wealthEl = document.createElement('tfoot');
    wealthEl.innerHTML = `<tr><td>Total Wealth:</td><td>$${sum}</td></tr>`
    table.appendChild(wealthEl)
}

// event listeners
addUserBtn.addEventListener('click', addUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortRichestBtn.addEventListener('click', sortRichest);
calculateWealthBtn.addEventListener('click', calculateWealth);