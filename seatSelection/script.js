const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

// Update total and count 
function updateSelectCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event 
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectCount()
})

// seat click
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle("selected");

        updateSelectCount();
    }
})