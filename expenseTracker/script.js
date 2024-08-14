const balance = document.getElementById('balanceNum')
const income = document.getElementById('incomeNum')
const expense = document.getElementById('expenseNum')

const historyCtn = document.getElementById("historyCtn")

// const dummyTransactions = [
//     {id: 1, text: 'Flower', amount: -20},
//     {id: 2, text: 'Salary', amount: 140},
// ]

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
let transactions = 
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function addFormData(e) {
    e.preventDefault();
    
    const formText = document.getElementById("formText")
    const formNum = document.getElementById("formNumber")
    const transaction = {
        id: generateID(), 
        text: formText.value.trim(), 
        amount: +formNum.value.trim()
    }

    transactions.push(transaction)
    updateDOM(transaction)
    updateLocalStorage();
   
    formText.value = ''
    formNum.value = ''
}

function generateID() {
    return Math.floor(Math.random() * 100000)
}

function updateDOM(transaction) {
    const card = document.createElement("div")
    card.classList.add("card")
    if (transaction.amount > 0) {
        card.classList.add("income")
    } else {
        card.classList.add("expense")
    }
    card.innerHTML = 
        `<div class="text">${transaction.text}</div>
        <div class="num">${transaction.amount}</div>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`
        historyCtn.appendChild(card)

    updateBalance(); 

}

function init() {
    historyCtn.innerHTML = ''
    transactions.forEach(element => {
        updateDOM(element)
    });
}

function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    updateBalance();
    init();


}

function updateBalance() {
    const amounts = transactions.map(transaction => 
        transaction.amount
    )

    const totalBalance = amounts.reduce((acc, item) => (acc += item), 0);
    const totalIncome = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);
    const totalExpense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1);

    balance.innerText = formatter.format(totalBalance)
    income.innerText = `+${formatter.format(totalIncome)}`
    expense.innerText = `-${formatter.format(Math.abs(totalExpense))}`

}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

document.getElementById("newTransInput").addEventListener('submit', addFormData)

init()